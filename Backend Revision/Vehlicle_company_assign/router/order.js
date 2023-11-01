const express = require("express");

const router = express.Router();
const {OrderModel} = require("../modules/order.module")
const {CustomerModel} = require("../modules/customer.module")
const {VehicleModel} = require("../modules/vehicle.module")



router.get("/order" , async(req , res)=>{
    try{
        const data = await OrderModel.find().populate("itemId").populate("customerId").populate("deliveryVehicleId");
        res.send({message : "data received" , data})
    } catch (error){
        console.log("Error while fetching items:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


router.post("/order/add", async (req, res) => {
    try {
        const { isDelivered, deliveryVehicleId, orderNumber, itemId, price, customerId } = req.body;

        // Check if any of the required fields are missing
        if (!itemId || !price || !customerId || !deliveryVehicleId) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        const customer = await CustomerModel.findById(customerId);

        const customerCity = customer.city;

        const vehicleeee = await VehicleModel.findById(deliveryVehicleId);
        const vehicleeeeCity = vehicleeee.city;
        const deliveryVehicle = await VehicleModel.findOne({ _id: deliveryVehicleId, activeOrdersCount: { $lt: 2 } });

        if (customerCity !==vehicleeeeCity )
        {
            return res.status(400).json({ error: "delivery vehicle city not matched" });
        }
        else if (!deliveryVehicle) {
            return res.status(400).json({ error: "No delivery vehicle available." });
        } 

     
        

      
        // Create the order
        const newOrder = new OrderModel({
            orderNumber,
            itemId,
            price,
            customerId,
            deliveryVehicleId,
            isDelivered: isDelivered || false, // Default to false if not provided
        });

        // Increment the activeOrdersCount of the assigned delivery vehicle
        deliveryVehicle.activeOrdersCount++;
        await deliveryVehicle.save();

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Step 4: Fetch List of Orders (Already Implemented)

// Step 5: Mark an Order as Delivered
router.put("/order/delivered/:orderId", async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await OrderModel.findById(orderId);

        if (!order) {
            return res.status(404).json({ error: "Order not found." });
        }
        // Mark the order as delivered
        order.isDelivered = true;
        await order.save();

        // Decrement the activeOrdersCount of the associated delivery vehicle
        const deliveryVehicle = await VehicleModel.findById(order.deliveryVehicleId);
        if (deliveryVehicle) {
            deliveryVehicle.activeOrdersCount--;
            await deliveryVehicle.save();
        }
        res.status(200).json({ message: "Order marked as delivered." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;