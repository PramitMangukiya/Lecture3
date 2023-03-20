const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Pramit",{})
.then(()=>{
    console.log("connection Successful");
})
.catch((err)=>{
    console.log(err);
})

const playlistSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    date : {
        type: Date,
        default: Date.now
    }
})
const playlist = mongoose.model("playlist",playlistSchema);

const document = async ()=>{
    try{

const reactjs = new playlist({
    name:"React JS",
    ctype:"Back End",
    videos:6,
    author:"Pramit",
    active:"true",
})
const nodejs = new playlist({
    name:"Node JS",
    ctype:"Back End",
    videos:5,
    author:"Pramit",
    active:"true",
})
const expressjs = new playlist({
    name:"Express JS",
    ctype:"Back End",
    videos:9,
    author:"Pramit",
    active:"true",
})
const javascript = new playlist({
    name:"javascript",
    ctype:"Front End",
    videos:5,
    author:"Pramit",
    active:"true",
})
const result = await playlist.insertMany([reactjs,nodejs,expressjs,javascript])
console.log(result);
    }catch(err){
        console.log(err);
    }
}

document();
