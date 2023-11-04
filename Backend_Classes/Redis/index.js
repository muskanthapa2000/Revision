const express = require("express");

const Redis = require("ioredis")
const {connection , GoldModel} = require("./config/db")
// const redis = new Redis();

const app = express();
app.use(express.json());


app.use("/" , (req , res)=>{
    res.send("home page")
})

app.get("/gold" , async (req , res)=>{
    const data = await GoldModel.findOne({name : "gold"});
    req.send({"gold rate is": data.price });

})
// upset = is used to update present data if data not present it will insert the new one. 

app.post("/gold/post" , (req , res)=>{
    
})


app.listen(8000 , async()=>{
       try {
        await connection 
            console.log("connected to db")
       } catch (error) {
        console.log("err while connection")
       }
       
       console.log("app is listing on port 8000");
})

