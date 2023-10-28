const express = require("express");
const router = express.Router();

const {StaffModel} = require("../models/staff.model");
// const router = express.Router();


router.post("/staff" , async(req , res)=>{
    const {name , email} = req.body;
    const staff = await StaffModel.create({
        name , email
    });

     res.send(staff);
}
)

module.exports = router;

// module.exports={
//     create : async(req , res)=>{
//         const {name , email} = req.body;
//         const staff = await Staff.create({
//             name , email
//         });

//         return res.send(staff);
//     }
// }