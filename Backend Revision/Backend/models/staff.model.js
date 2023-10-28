const mongoose = require("mongoose");
const {connection} = require("../config/db")

const staffSchema = mongoose.Schema({
    email: { type: String },
    name: { type: String },
}, {
    timestamps: true
});

const StaffModel = mongoose.model("staff", staffSchema);

module.exports = { StaffModel };
