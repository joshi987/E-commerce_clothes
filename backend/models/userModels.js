const mongoose = require("mongoose");
const bcryt = require("bcryptjs")

const userSchema = mongoose.Schema({
   
  name: {
    type: String,
    required: [true, " Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please add a email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid emaial",
    ],
  },
  password:{
    type:String,
    required:[true,"please add a password"],
    minLength:[6,"Password must be up to 6 character"],
    // maxLength:[23,"Password must not be more than 23 character"]

  },
  photo:{
    type:String,
    required:[true, "Please add a photo"],
    default:"https://i.ibb.co/QQNyDRf/dummy-profile-pic-male1.jpg"
  },
  phone:{
    type:String,
    required:[true, "Please add a photo"],
    default:"+91"
  },
},{
    timeStamps:true
});

//Encrypt password before saving to DB

userSchema.pre("save", async function (next){
  if(!this.isModified("password")){
    console.log('no change')
    return next();

  }


  //Hash password
const salt = await bcryt.genSalt(10)
const hashedPassword = await bcryt.hash(this.password,salt)//what do you want with hash-->first argument and second require in salt
this.password = hashedPassword;

})


const User = mongoose.model("User", userSchema);
module.exports = User;
