const express = require("express");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const app = express();
const port = 3000;

const sendMail = require("./controller/sendMail")

app.get("/", (req,res)=>{
    res.send("Hii.....")
})

app.get("/mail",sendMail);

const start = async()=>{
    try{
        app.listen(port,()=>{
            console.log(`http://localhost${port}`);
        })
    }catch(error){
        console.log("Not Found");
    }
}

start();