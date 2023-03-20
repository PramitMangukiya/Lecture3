const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/pramit",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Connection Successfull");
})  
.catch((err)=>{
    console.log("no Connection");
})