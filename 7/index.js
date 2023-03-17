const fs=require("fs");

fs.writeFile("read.txt","hiii.........",(err)=>{
    console.log("File Is Created");
    console.log(err);
})