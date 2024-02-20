const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel");
const { request } = require("express");


const createProduct = asyncHandler(async (req,res)=>{
const {user,name, sku,quantity,price,description }=req.body

//validation
if(!name  || !price || !description  || !quantity || !sku ){
    res.status(400)
    throw new Error("please fill in all fields");
}
//Mange Image upload

//create Product
const product = await Product.create({
    user: req.user.id,
    name,
    sku,
    quantity,
    price,
    description,
})

res.status(201).json(product);

});

module.exports = {
    createProduct,
}