const express = require("express");
const router = express.Router();
const {adminlogout} = require("../controllers/adminController")
router.get("/",adminlogout);

module.exports=router