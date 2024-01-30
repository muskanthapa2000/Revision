const express = require("express");
const router = express.Router();

const {userModel} = require("../models/user.model")

const bcrypt = require('bcrypt');


router.post("/signup" , async(req , res)=>{
    const {name , email , password , role} = req.body;

    bcrypt.hash(password, 4, async function (err, hash) {
        if (err) {
            res.send("Error while signup");
        }
        else {
            const user = await userModel.create({name , email , password : hash , role});
         res.send(user);
        }
    });
})

module.exports = router;