
const express = require("express");
const router = express.Router();
const {SignupModel} = require("../modules/signup.module")


router.post("/signup", async(req , res)=>{
    const {name , email , password} = req.body;
    try {
        const data = await SignupModel.create({name , email , password})
        res.status(200).json({message : "signup successfull" , data})
    }
    catch (err){
        res.send({message : "found error" , err})
    }

})

module.exports = router; 