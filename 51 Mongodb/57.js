const { log } = require("console");
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

const getDocument = async()=>{
    const result = await playlist
    // .find({$and : [{ctype:"Back End"}, 
    // {author:"Pramit"}]})
    .find({author:"Pramit"})
    .select({name:1})
    .sort("name: -1")
    // .countDocuments();
    console.log(result);
}

const updateDocument = async(_id)=>{
    try{
        // const result = await playlist.updateOne({_id}, {
        const result = await playlist.findByIdAndUpdate({_id}, {
            $set :{
                name:"Javascript"
            }
        });
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

// getDocument();
updateDocument("641832452c16da82e528d14a");
