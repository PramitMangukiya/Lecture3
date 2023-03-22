require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("./db/connect");

const Register = require("./model/register");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.set("view engine", "ejs");

// console.log(process.env.SECRET_KEY);
app.get("/", (req, res) => {
  res.render("");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Register.findOne({ email: email });
    const isMatch = bcrypt.compare(password, useremail.password);
    const token = await useremail.generateAuthToken();
    // console.log("token" + token);

    if (isMatch) {
      res.status(201).render("index");
    } else {
      res.send("Password Wrong");
    }
  } catch (error) {
    res.status(400).send("invalid Email");
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.retype_password;

    if (password === cpassword) {
      const registeremployee = new Register({
        name: req.body.name,
        email: req.body.email,
        password: password,
        retype_password: cpassword,
        gender: req.body.gender,
      });

      const token = await registeremployee.generateAuthToken();
      const registered = await registeremployee.save();
      res.status(201).render("login");
    } else {
      res.send("password are not matching");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

// const securePassword = async(password)=>{
// const passwordHash=  await bcrypt.hash(password, 11);
// console.log(passwordHash);
// const passwordHah=  await bcrypt.compare("pramit@123", passwordHash);
// console.log(passwordHah);
// }
// securePassword("pramit@123");

const createToken = async () => {};

app.listen(port, () => {
  console.log(`Server Is Running At Port no http://localhost:${port}`);
});

//Encryption
// pramit -> lvwpg n
// original data lakho to hacker tene encode kari sahke ane te original data batavi de

//Hashing
// one way communication(pramit -> fsghybf.hfdhf.hbh random value) not decrypt original data ma convert no kari shako
