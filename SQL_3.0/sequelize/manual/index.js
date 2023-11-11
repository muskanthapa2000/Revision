const express = require("express");
const Sequelise = require("sequelize")

const app = express();
//  database , user_Name , passward
const sequelize = new Sequelise("NxM301" , "root" , "Thapa@123", {
    host : "localhost",
    dialect : "mysql"
});

const students = sequelize.define ( "students", {
    name : Sequelise.STRING,
    email : Sequelise.STRING,
    age : Sequelise.INTEGER
}

)

app.get("/" , (req , res)=>{
    res.send("home page")
})


sequelize.sync().then(()=>{
    app.listen(8000, ()=>{
        console.log("app is listening on port 8000")
    })
})
