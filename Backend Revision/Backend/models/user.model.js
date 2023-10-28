
const { text } = require("express");
const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
    email : {type : String},
    password : {type : String},
    name : {type : String},
    role : {type : String , enum : ["student" , "teacher"] , default : "student"}
})

const userModel = mongoose.model ("user" , userSchema)

module.exports = { userModel}