const http = require('node:http');

const server = http.createServer((req, res) => {
    if(req.url==="/"){
        res.end("home page")
    } else if(req.url=== "/slowPage"){
        let j =0;
        for(let i =0; i<=10000000000; i++){
            j++
        }
        res.end(`slow page ${j}`); 
    }
})

server.listen(8080, () => console.log('Server is running on port 8080'));