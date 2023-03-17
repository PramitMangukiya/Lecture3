const express = require("express");

const app = express();

// app.get(route,callback)
// API(CRUD Operation) = get - Read, Post - Craete, Put - Update, Delete - Delete

//The call back function 2 parameters, Request(req) and response(res)
//The Request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP Headers etc.
app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/about",(req,res)=>{
    res.send("Abou Us Page")
})

app.listen(3000,()=>{
    console.log(`Port is start from http://localhost:3000`);
})