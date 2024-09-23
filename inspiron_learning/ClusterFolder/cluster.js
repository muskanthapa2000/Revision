const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

console.log(OS.cpus().length);

if(cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else{
    console.log(`worked ${process.pid} started`); 
    const server = http.createServer((req, res) => {
        if(req.url==="/"){
            res.end("home page")
        } else if(req.url=== "/slowPage"){
            for(let i =0; i<=10000000000; i++){}
            res.end("slow page")    
        }
    })    
    server.listen(8080, () => console.log('Server is running on port 8080'));
}