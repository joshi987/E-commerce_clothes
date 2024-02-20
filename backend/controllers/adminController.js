const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcryt = require("bcryptjs");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const createAdmin = async (email, password) => {
  try {
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return existingAdmin;
    }

    const hashedPassword = await bcryt.hash(password, 10);

    const newAdmin = await Admin.create({
      email: email,
      password: hashedPassword,
    });

    return newAdmin;
  } catch (error) {
    throw new Error("Failed to create admin");
  }
};

const onlyAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    if (
      email === process.env.EMAIL_SECRET &&
      password === process.env.PASSWORD_SECRET
    ) {
      const newAdmin = await createAdmin(email, password);

      const token = generateToken(newAdmin._id);

      // Send HTTP-only cookie
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), // 1 day
        sameSite: "none",
        secure: false, // Set to true in production with HTTPS
      });

      return res.send("Admin created successfully");
    } else {
      return res.status(401).send("Unauthorized");
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
});

const adminProtected = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, please login");
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(verified.id).select("-password");

    if (!admin) {
      res.status(401);
      throw new Error("Not authorized, please login");
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, please login");
  }
});


//logout
const adminlogout = asyncHandler(async (req, res, next) => {
  try {
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
      secure: false, // Set to true in production with HTTPS
    });

    return res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = { onlyAdmin, adminProtected, adminlogout };
