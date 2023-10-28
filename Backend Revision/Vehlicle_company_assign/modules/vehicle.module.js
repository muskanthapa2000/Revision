
const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
    registrationNumber : {type : String , required : true , unique : true , match: /^[a-zA-Z0-9]*$/},
    vehicleType : {type : String , enum : ["bike" , "truck"] , required: true,},
    city : {type : String , required : true},
    activeOrdersCount : {type: String , default : "0" , max: 2}
})

const VehicleModel = mongoose.model("vehicle" , vehicleSchema);

module.exports = {VehicleModel}