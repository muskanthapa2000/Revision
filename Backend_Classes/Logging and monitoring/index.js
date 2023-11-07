const express = require("express");
// const winston = require("winston/lib/winston/config");
const winston = require ("winston")
const expressWinston = require("express-winston")
require("winston-mongodb")


const app = express();
app.use(express.json());

app.use(expressWinston.logger({
    transports: [
        //  to transfer to console 
      new winston.transports.Console({
        json: true,
        colorize: true,
        // level : "info"
        // level : "warn"
        level : "error"
      }),
       //  to transfer to file (saving the data into new created  file)
       new winston.transports.File({
      
        level : "info",
        filename : "loginfo.log"
     
      }),
       //  to transfer to mongodb
    //    new winston.transports.MongoDB({
      
    //     level : "info",
    //     db : "..... db name"
     
    //   }),
    ],
    format : winston.format.prettyPrint()
  }));
  

// Home Page
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/result", (req, res) => {
    res.send("GET RESULT");
});

app.get("/reports", (req, res) => {
    const token = req.query.token;
    if(token !=123)
    {
        res.send("unquthorized  ");
    }
   else {
    res.send("reports");
   }

});


app.listen(8000, async () => {

    console.log("App is listening on port 8000");
});
