const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(`${__dirname}/UserApi/user.json`,"utf-8")
    const objd = JSON.parse(data);

    if(req.url == "/"){
        res.end("hello");
    }else if(req.url == "/about"){
        res.end("Hello This Is About Page")
    }else if(req.url == "/contact"){
        res.end("Hello This Is Contact Page")
    }else if(req.url == "/userapi"){
        res.writeHead(200, {"content-type":"application/json",} )
        res.end(objd[0]);
    }else{
        res.writeHead(404);
        res.end("Not Page")
    }
})

server.listen(3000, "127.0.0.1",()=>{
    console.log(`listening to the port http://localhost:${port}`)
});