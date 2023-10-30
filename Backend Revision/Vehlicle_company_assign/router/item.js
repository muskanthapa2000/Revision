const express = require("express")
const router = express.Router();
const {ItemModel} = require("../modules/item.module")
const {authentication} = require("../middleware/middleware")


router.get("/items",authentication , async (req, res) => {
    try {
      const data = await ItemModel.find();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error while fetching items:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  router.post("/items/add" , async(req , res)=>{
    try {
        const {name , price} = req.body;
        const data = await ItemModel.create({name , price});
        res.send({message : "data added successfully" , data})

    } catch (error) {
        console.log("Error while adding the data" , error);
        res.status(500).json({error : "Internal server error"})
    }
  })


  router.put("/items/update/:id" ,async (req , res)=> {
    const {id} = req.params;
    const {name , price} = req.body;
    try{ 
        const data = await ItemModel.findByIdAndUpdate(id , { name, price }, { new: true})
        if (data) {
          res.send({ message: "Data updated successfully", data });
        } else {
          res.status(404).json({ error: "Item not found" });
        }
    }
    catch(error){
      res.status(500).json({error : "Internal server error"})
    }
    }
  )

module.exports = router;

