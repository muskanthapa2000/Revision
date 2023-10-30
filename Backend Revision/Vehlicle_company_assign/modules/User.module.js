
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email : {type : String , required: true, unique : true},
    password : {type : String , required : true},
    name : {type : String , required : true},

})

const userModel = mongoose.model("signup" , userSchema);

module.exports = {userModel}