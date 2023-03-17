const fs = require("fs");

const pm = {
    name : "PM",
    age : 18,
    Subject : "BCA",
}

// console.log(pm.name);

const json = JSON.stringify(pm);
// console.log(json);
// console.log(json.subject);

const obj1 = JSON.parse(json);
// console.log(obj1);
// console.log(obj1.Subject);


//3 : Read File
//4 : Again Convert back to JS Obj Ori
//5 : Console.log

//1 : Convert to JSON
const json1 = JSON.stringify(pm);

//2 : Dusre File Me Add Karna
// fs.writeFile("json2.json",json1,(error)=>{
//     console.log("done");
// });

fs.readFile("json2.json","utf-8",(err,data)=>{
    const original = JSON.parse(data);
    console.log(data);
    console.log(original);
});