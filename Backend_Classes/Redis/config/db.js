

const mongoose = require ("mongoose");

const connection = mongoose.connect("mongodb+srv://muskanthapa:muskan@cluster0.lh0f6z8.mongodb.net/RedisData?retryWrites=true&w=majority");

const GoldSchema = mongoose.Schema({
    name : {type : String, default : "gold"},
    price : Number
    
})

const GoldModel = mongoose.model("gold" , GoldSchema)

module.exports = {connection , GoldModel}

