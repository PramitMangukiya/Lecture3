const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static());
const staticPath = path.join(__dirname,'../public');

app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("hello World");
});

app.get("/about",(req,res)=>{
    res.send("Hii This Is About US Page");
});

app.get("/contact",(req,res)=>{
    res.send("Hii This Is Contact Page");
})
app.listen(3000,() => {
    console.log("Your port is start https://localhost:3000");
})