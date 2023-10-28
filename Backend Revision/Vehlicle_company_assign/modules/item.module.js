
const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    name : {type : String , required : true},
    price : {type : String , required : true}
})

const ItemModel = mongoose.model("item" , itemSchema);

module.exports = {ItemModel}