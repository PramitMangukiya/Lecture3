const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

mongoose.connect("mongodb://127.0.0.1:27017/Authentication",{
    // useNewUrlParser: true,
    // useCreateIndex: true,
}).then(()=>{
    console.log("connection Susscessful");
}).catch((error)=>{
    console.log('No Connection')
})