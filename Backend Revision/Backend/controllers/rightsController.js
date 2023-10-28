const express = require("express");
const router = express.Router();

const { RightsModel } = require("../models/rights.model");

router.post("/rights", async (req, res) => {
  try {
    const right = await RightsModel.create({
      staff_id: req.body.staff_id,
      right: req.body.right
    });

    const rightData = await right.save();

    res.send(rightData);
  } catch (error) {
    res.send(error);
  }
});

router.get("/staffByRight", async (req, res) => {
  try {
    const rightData = await RightsModel.find({ _id: req.body.right_id }).populate("staff_id");
    res.send(rightData);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
