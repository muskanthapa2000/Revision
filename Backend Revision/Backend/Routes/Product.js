const express = require("express");
const router = express.Router();

const {ProductModel} = require("../models/product.model")
const {authentication , authorisation} = require("../Routes/Middleware")

// console.log(authentication);

// ......................... POST ...................................
router.post("/product/add"  , async(req , res)=>{
    const {name , imagelink , price ,stockavilable , comingsoon , category , role  } = req.body;
    const data = await ProductModel.create({name , imagelink , price ,stockavilable , comingsoon , category , role});
    res.send(data);
})


// .......................... GET ................................

router.get("/product"  ,  async(req , res)=>{
    const {name , category , _sort , _order , productSkip , productLimit ,
         comingsoon , stockavilable , price_lte , price_gte } = req.query;
    let query = {};
  
    if (name) {
        query.name = { $regex: name};
    }

    if(category) {
        query.category = category;
    }

    if (comingsoon){
        query.comingsoon = comingsoon;
    }


    if (stockavilable){
        query.stockavilable = stockavilable;
    }

    if (price_lte)
    {
        query.price =  { ...query.price, $lte: parseInt(price_lte) }
    }

    if(price_gte ){
        query.price =  { ...query.price, $gte: parseInt(price_gte) }
    }

    const sorting = {};

    if(_sort) {
        if(_order == 'asc' || _order == "desc"){
            sorting[_sort] = _order === "asc" ? 1 : -1;
        }
    }




    let skipData = parseInt(productSkip*productLimit);

    const data = await ProductModel.find(query).sort(sorting).skip(skipData).limit(productLimit);
    res.send(data);

})


// ........................ Delete .............................

router.delete("/product/:id" ,authentication ,   async(req , res)=>{
    const {id} = req.params;
    const data = await ProductModel.findOneAndDelete({_id : id})
    res.send(data);

})


// .............................. PUT ..........................

router.put("/product/:id", authentication ,  async (req, res) => {
    const { id } = req.params;
    const { name, imagelink, price, stockavailable, comingsoon, category } = req.body;

    try {
        const data = await ProductModel.findByIdAndUpdate(id, {
            name,
            imagelink,
            price,
            stockavailable,
            comingsoon,
            category
        }, { new: true });

        if (!data) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.send(data);
    } catch (error) {
        // Handle error
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// ..................................................................................................



module.exports = router;
