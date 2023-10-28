const express = require ("express");

const router = express.Router();
const {userModel} = require("../models/user.model");

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



router.post("/login" ,async (req , res)=>{
    const {email , password} = req.body;

    const is_user = await userModel.findOne({email });
    if (is_user) {
        const hashed_password = is_user.password;
        bcrypt.compare(password, hashed_password, function(err, result) {
           if (err){
            res.send("something went wrong");
           }
           else {
            var token = jwt.sign({userID : is_user._id}, 'shhhhh' , {
                expiresIn : '30m',
            });
          
            if (token) {
                res.send({ token: token });
              } else {
                res.send("token expire");
              }
         
           }
           
        });
    }
    else {
        res.send("signin first")
    }
    
})

module.exports = router;