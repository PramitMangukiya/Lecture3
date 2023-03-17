const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hii...")
});

app.get("/about",(req,res)=>{
    res.send("about Us page")
    res.send("<h1>about Us page</h1>")
});

app.get("/contact",(req,res)=>{
    res.send("Contact Page")
});

// app.get("/temp",(req,res)=>{
//     res.send([
//         {
//             id: 1,
//             name: "PM"
//         },
//         {
//             id: 1,
//             name: "PM"
//         },
//         {
//             id: 1,
//             name: "PM"
//         }
//   ]);
// });
app.get("/temp",(req,res)=>{
    res.json([
        {
            id: 1,
            name: "PM"
        },
        {
            id: 1,
            name: "PM"
        },
        {
            id: 1,
            name: "PM"
        }
    ]);
});

app.listen(3000, (req,res)=>{
    console.log("Hii http://localhost:3000")
});