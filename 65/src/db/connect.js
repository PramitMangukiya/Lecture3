const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/students-api",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    // useUnifiedToplogy:true
}).then(()=>{
    console.log("Conncetion Is Successsful");
}).catch(()=>{
    console.log("No Conncetion Is Successsful");
})