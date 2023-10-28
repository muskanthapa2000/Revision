const mongoose = require("mongoose");
const express = require("express");

const { userModel } = require("./models/user.model");
const { connection } = require("./config/db");
const app = express();
app.use(express.json());

const signupRouter = require("./Routes/Signup");
const loginRouter = require("./Routes/Login");
const addProduct = require("./Routes/Product");


const {authentication} = require("./Routes/Middleware")
const passport = require("./config/google-oauth")

// Your authentication middleware

app.get("/",(req, res) => {
    res.send("Home Page");
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile' , 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session :false }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect('/');
  });




app.use("/", signupRouter);
app.use("/", loginRouter);
app.use("/",  addProduct);

app.listen(8080, async () => {
    try {
        await connection;
        console.log("Connected to the MongoDB server");
    } catch (error) {
        console.log("Not connected to the MongoDB server");
    }

    console.log("App is listening on port 8080");
});

// Export the middleware functions

