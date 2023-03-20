const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hii...")
});

app.get("/about",(req,res)=>{
    res.send("about Us page")
});

app.get("/contact",(req,res)=>{
    res.send("Contact Page")
});

app.get("/temp",(req,res)=>{
    res.send("Temprature");
});

app.listen(3000, (req,res)=>{
    console.log("Hii http://localhost:3000")
});