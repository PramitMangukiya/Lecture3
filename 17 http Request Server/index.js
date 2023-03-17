const http = require("http");
const port = 3000;
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("hello");
    }else if(req.url == "/about"){
        res.end("Hello This Is About Page")
    }else if(req.url == "/contact"){
        res.end("Hello This Is Contact Page")
    }else{
        res.writeHead(404);
        res.end("Not Page")
    }
})

server.listen(3000, "127.0.0.1",()=>{
    console.log(`listening to the port http://localhost:${port}`)
});