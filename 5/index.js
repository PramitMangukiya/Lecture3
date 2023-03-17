const fs = require("fs");

// fs.writeFileSync("read.txt", "Welcome to my channel. ")

// fs.writeFileSync("read.txt", "Welcome to my channel, How are you")

// fs.appendFileSync("read.txt", "Hii How Are You");


fs.renameSync("readwrite.txt","read.txt");
// const buf_data = fs.readFileSync("read.txt");
// data = buf_data.toString();
// console.log(data)