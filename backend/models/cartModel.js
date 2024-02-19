const mongoose = require("mongoose");

const cartSchema=mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
   email_id:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Cart", cartSchema);