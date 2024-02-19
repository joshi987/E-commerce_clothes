const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");


const protect = asyncHandler(async(req,res,next)=>{
    try{
        const token = req.cookies.token
        if(!token){
            res.status(401)
            throw new Error("Not authorized, please login")
        }
        //verfiy token
        const verified=jwt.verify(token, process.env.JWT_SECRET)
        //GET user id from token
        user=await User.findById(verified.id).select("-password")
        if(!user){
            res.status(401)
            throw new Error("Not authorized, please login")
        }
        req.user = user
        next()

    }
    catch(error){
        res.status(401)
        throw new Error("Not authorized, please login")
        
    }
})

 module.exports ={protect}