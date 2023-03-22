const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const employeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  retype_password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
employeSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET_KEY  
    );
    this.tokens = this.tokens.concat({ token: token });
    console.log(token);
    await this.save();
    return token;
  } catch (error) {
    res.send("the Error is " + error);
    console.log("the Error is " + error);
  }
};

employeSchema.pre("save", async function (next) {
  if (this.isModified("password", "retype_password")) {
    // const passwordHash = await bcrypt.hash(password, 11);
    // console.log(`The Current password is ${this.password}`)
    this.password = await bcrypt.hash(this.password, 10);
    // this.retype_password = await bcrypt.hash(this.retype_password,11);
    // console.log(`The Current password is ${this.password}`)
    this.retype_password = await bcrypt.hash(this.password, 10);
  }
  next();
});
const Register = new mongoose.model("Register", employeSchema);

module.exports = Register;
