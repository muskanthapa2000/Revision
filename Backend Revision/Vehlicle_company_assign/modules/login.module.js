
const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
    email : {type : String , required: true, unique : true},
    password : {type : String , required : true},

})

const LoginModel = mongoose.model("signup" , loginSchema);

module.exports = {LoginModel}