const express = require("express");
const router = express.Router();
const {CustomerModel} = require("../modules/customer.module")

router.get('/custmer', async(req,res)=>{
    const data = await CustomerModel.find();
    res.send(data)
});

router.post('/custmer/add', async(req,res)=>{
    try{
        const {name, city}= req.body;
        const data = await CustomerModel.create({
            name, 
            city
        })
        res.send( data);
    }catch(err){
        res.send({msg : "post not done"})
    }
})

module.exports =  router;