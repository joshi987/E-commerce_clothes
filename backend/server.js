const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")
const admincontrol = require("./routes/adminRoute")
const logout = require("./routes/adminLogout")
const errorHandler =require('./middleWare/erroMiddleware')
const cookieParser = require("cookie-parser")
const app = express();

//Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))


//Routes Middleware
app.use("/api/users", userRouter)
app.use("/api/products", productRoute)
app.use("/admins", admincontrol)
app.use("/log-out", logout)



//Routes
app.get("/", (req,res)=>{
        res.send("Home pages")
})

//error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


//CONNECT TO DB AND START SERVER
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on portt ${PORT}`);
    })
}).catch((err)=>console.log(err))
