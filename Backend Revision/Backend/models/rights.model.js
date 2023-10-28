const mongoose = require("mongoose");
const {connection} = require("../config/db")

const rightsSchema = mongoose.Schema({
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'staff'
    },
    right: { type: String }
}, {
    timestamps: true
});

const RightsModel = mongoose.model("rights", rightsSchema);

module.exports = { RightsModel };
