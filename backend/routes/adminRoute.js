const express = require("express");
const router = express.Router();
const  {protect}  = require("../middleWare/authMiddleware");
const { onlyAdmin,} = require("../controllers/adminController");


router.post("/",onlyAdmin);








module.exports = router;