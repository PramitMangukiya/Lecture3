const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
const Register = require("../model/register");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    console.log("VerifyUSer => " + verifyUser);

    const user = await Register.findOne({ _id: verifyUser._id });
    console.log("USER => " + user);

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = auth;
