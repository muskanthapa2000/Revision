const express = require("express");
const jwt = require("jsonwebtoken"); // Import the jsonwebtoken module
const {userModel} = require("../models/user.model")

const authentication = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.send("Login First");
    } else {
        jwt.verify(token, 'shhhhh', function (err, decoded) {
            if (err) {
                res.send("Login first");
            } else {
                const { userID } = decoded;
                req.userID = userID;
                next();
            }
        });
    }
};

// Your authorization middleware
const authorisation = (permittedRoles) => {
    return async (req, res, next) => {
        const userID = req.userID;
        const user = await userModel.findOne({ _id: userID });
        const user_role = user.role;
        if (permittedRoles.includes(user_role)) {
            next();
        } else {
            res.send("Not authorized");
        }
    };
};

module.exports = { authentication , authorisation};
