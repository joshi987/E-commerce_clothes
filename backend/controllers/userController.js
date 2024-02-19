const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcryt = require("bcryptjs");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be upto 6 character");
  }

  //check if user email already exists
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("Email has already been registered");
  }

  //create new user

  const user = await User.create({
    name,
    email,
    password,
  });

  //Generate Token

  const token = generateToken(user._id);

  //send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), //1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, email, photo, phone } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  //check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User Not found, please signup");
  }

  //user exits, check if password is correct
  const passwordIscorrect = await bcryt.compare(password, user.password);

  //Generate token code
  const token = generateToken(user._id);

  if (passwordIscorrect) {
    //send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), //1 day
      sameSite: "none",
      secure: true,
    });
  }

  if (user && passwordIscorrect) {
    const { _id, name, email, photo, phone } = user;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      phone,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

//Logoout user
const logOut = asyncHandler(async (req, res) => {
  //send HTTP-only cookie
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), //expire the cookie
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "Successfully logged Out" });
});

//Get User Data
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, name, email, photo, phone } = user;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      phone,
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

//get Login status
const loginStatus = asyncHandler (async(req,res)=>{
  const token = req.cookies.token
  if(!token){
    return res.json(false);
  }
   //verfiy token
   const verified=jwt.verify(token, process.env.JWT_SECRET)
if(verified){
  return res.json(true);
}
return res.json(false);
})

module.exports = {
  registerUser,
  loginUser,
  logOut,
  getUser,
  loginStatus
};
