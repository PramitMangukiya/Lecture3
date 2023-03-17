const EvenEmitter = require ("events");

const event = new EvenEmitter();

event.on("save",()=>{
    console.log("My Name Is PM");
});
event.on("save",()=>{
    console.log("My Name Is MP");
});
event.on("save",()=>{
    console.log("My Name Is UP");
});

event.on("checkPage",(sc,msg)=>{
    console.log(`satus code is ${sc} and the page is ${msg}`);
});

event.emit('save');
event.emit("checkPage",200,'ok');