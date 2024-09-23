const express = require("express");
const multer  = require('multer')
const path = require('path');
const { Worker } = require('worker_threads');
const app = express(); 

app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  //cb is callback function
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  const upload = multer({storage})

app.get('/', (req , res)=>{
    res.send('Welcome to the API');
})
app.post('/upload-images', upload.array('file'), (req , res)=>{

    if (!req.files || req.files.length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    const filePath = req.files[0].path; // Assuming you're only processing the first file
    const worker = new Worker("./sharp-worker.js", {
        workerData: { filePath: req.files[0].path } // Pass the file path to the worker
    });
    
    worker.on('message', (data) => {
        console.log('Image processed successfully', data);
        res.status(200).send(data);
    });

    worker.on('error', (error) => {
        res.status(500).send(`Worker error: ${error.message}`);
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    });
    console.log(req.body);
    console.log(req.files);
    res.send("uploaded successfully")
 })

app.listen(8000 , () => {
    console.log("Server is running on port 8000");
});

