const express = require('express'); 
const path = require("path")
const app = express();
const ejs = require("ejs");
require("./db/connect");

const Register = require("./model/register");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port = 3000;
const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("login");
})
app.get("/register",(req,res)=>{
     res.render("register");
})

app.post("/register",async(req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.retype_password;

        if(password === cpassword){
            const remployee = new Register({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                retype_password:req.body.retype_password,
                gender:req.body.gemder
            })

            const register = await remployee.save();
            res.status(201).render(index);    
        }else{
            res.send("password are not matching");
        }
    }catch{
        res.status(400).send(console.error);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port no http://localhost:${port}`);
})