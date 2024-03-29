const express = require('express');
const { registerUser,loginUser,logOut,getUser,loginStatus,adminpanel} = require('../controllers/userController');
const {protect} =require('../middleWare/authMiddleware');
const router = express.Router();



router.post("/register", registerUser)
router.post("/login", loginUser );
router.get("/logout", logOut );
router.get("/getuser",protect, getUser)
router.get("/loggedin",loginStatus)
router.post("/adminpanel",adminpanel)


module.exports = router