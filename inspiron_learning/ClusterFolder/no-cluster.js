const http = require('node:http');

const server = http.createServer((req, res) => {
    if(req.url==="/"){
        res.end("home page")
    } else if(req.url=== "/slowPage"){
        for(let i =0; i<=10000000000; i++){}
        res.end("slow page")    
    }
})
server.listen(8080, () => console.log('Server is running on port 8080'));
// PM2 : npm install pm2 -g (process manager)
// pm2 start app.js -i max
// app.js is your application file.
// -i max tells PM2 to fork as many workers as there are CPU cores on your machine. You can also specify a number (e.g., -i 4 for 4 workers).
// PM2 will automatically manage clustering for you, so you don't need to manually use cluster.fork() in your code.