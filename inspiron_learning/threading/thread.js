const http = require('node:http');
const {Worker} = require("node:worker_threads");

const server = http.createServer((req, res) => {
    if(req.url==="/"){
        res.end("home page")
    } else if(req.url=== "/slowPage"){
        const worker = new Worker('./worker-thread.js');
        worker.on('message' , (j)=>{
            res.end(`slow page ${j}`); 
        });
    }
})

server.listen(8080, () => console.log('Server is running on port 8080'));