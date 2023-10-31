const express = require("express");
const {connection} = require("./config/db")
const mongoose = require("mongoose")
// const {ItemModel} = require("./modules/item.module")
const itemRoute = require("./router/item")
const vehicleRoute = require("./router/vehicle")
const signupRoute = require("./router/signup")
const loginRoute = require("./router/login")
const orderRoute = require("./router/order")
const customerRoute = require("./router/customer")


const app = express();
app.use(express.json());

// app.use("/" , (req , res)=>{
//     res.send("home page");
// })

app.use("/" , itemRoute)
app.use("/" , vehicleRoute)
app.use("/" , signupRoute)
app.use("/" , loginRoute)
app.use("/" , orderRoute)
app.use("/" , customerRoute)


app.listen(8000 , async(req , res)=>{
        try {
            await connection 
            {
                console.log("connected to db");
            }
        } catch (error) {
            console.log("connected to error" , error);
        }
        console.log("running 8000");
})

