const express = require("express");
const mongoose = require("mongoose");
const rights = require("./controllers/rightsController")
const staff = require("./controllers/staffControlller")
const connection = require("./config/db")

const bodyParser = require("body-parser");

const app = express();

// const dbURI = "mongodb+srv://muskanthapa:muskan@cluster0.lh0f6z8.mongodb.net/backendrevision?retryWrites=true&w=majority";

// const connection = mongoose.connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use("/" , rights);
app.use("/" , staff);

app.listen(8080, async () => {
    try {
        await connection;
        console.log("Connected to the MongoDB server");
    } catch (error) {
        console.log("Not connected to the MongoDB server");
    }

    console.log("App is listening on port 8080");
});
