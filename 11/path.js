const path = require("path");

console.log(path.dirname("D:/PM/Node JS/11"));
console.log(path.extname("D:/PM/Node JS/11"));
console.log(path.basename("D:/PM/Node JS/11"));

const myPath = path.parse("D:/PM/Node JS/11")
console.log(myPath.root);

console.log("path");
