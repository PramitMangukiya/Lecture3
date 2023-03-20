const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static());

// Built in middleware
const staticPath = path.join(__dirname,'../public');
app.set("view engine", 'ejs');
app.use(express.static(staticPath));

//template engine route
app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/",(req,res)=>{
    res.send("hello World");
});

app.get("/about",(req,res)=>{
    res.send("Hii This Is About US Page");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.listen(3000,() => {
    console.log("Your port is start https://localhost:3000");
})