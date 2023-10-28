
const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    name : {type : String , required : true},
    city : {type : String , required : true}
})

const CustomerModel = mongoose.model("customer" , customerSchema);

module.exports = {CustomerModel}