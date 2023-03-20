// CRUD operation
// Create
// Read
// Upadte
// Delete

const fs = require('fs');
//1 Make Folder
// fs.mkdirSync("thapa");

//2 Make Txt File
// fs.writeFileSync("thapa/bio.txt","My Name is Pramit")

//3 Rename Txt File
// fs.renameSync("thapa/bio.txt","thapa/my.txt")

//4 Add Content 
// fs.appendFileSync("thapa/bio.txt","Plz Subscribe");

// 5 Without Buffer Data
// const app = fs.readFileSync("thapa/bio.txt","utf-8");
// console.log("data");

// fs.mkdtempSync("thapa");
//6 Delete File
// fs.unlinkSync("thapa/my.txt");

//7 Folder Delete
// fs.rmdirSync("thapa");