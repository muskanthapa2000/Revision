const express = require("express");
const Redis = require("ioredis");
const { connection, GoldModel } = require("./config/db");
const redis = new Redis();

const app = express();
app.use(express.json());

// Home Page
app.get("/", (req, res) => {
    res.send("Home Page");
});

// Get Gold Rate
app.get("/goldrate", async (req, res) => {
    // Get the cached gold rate from Redis
    redis.get("goldratecache", async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result) {
                res.send({ "gold rate is": result });
            } else {
                // Fetch gold rate from the database
                const gold_rate = await GoldModel.findOne({ name: "gold" });
                res.send({ "gold rate is": gold_rate?.price });
            }
        }
    });
});

// upsert = is used to update present data if data not present it will insert the new one. 

// Update Gold Rate
app.patch("/goldrate/add", async (req, res) => {
    try {
        const { price } = req.body;
        
        await GoldModel.updateOne({ name: "gold" }, { price: price }, { upsert: true });
        redis.set("goldratecache", price, "EX", 120);
        res.send({ message: "Data updated successfully" });
    } catch (error) {
        console.error("Error while updating gold rate:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(8000, async () => {
    try {
        await connection;
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error while connecting to the database:", error);
    }

    console.log("App is listening on port 8000");
});
