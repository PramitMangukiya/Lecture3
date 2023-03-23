const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const employeSchema = new mongoose.Schema({
  name: Joi.string().min(3).max(10).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.ref("password"),
  retype_password: Joi.string().min(3).max(10).optional(),
  gender: Joi.string().valid("activated").valid("unactivated"),
  // address: {
  //   state: Joi.string().length(2).reuired(),
  // },
  // DOB: Joi.date().greater(new Date("2012-01-01")).required(),
  //   referred:Joi.boolean().required(),
  //   referredDetails: Joi.string().when("referred",{
  //     is : true,
  //     then:Joi.string().rquired().min(3).max(25),
  //     otherwise:Joi.string().optional()
  //   }),
  //   hobbies: Joi.array().items([Joi.string(),Joi.number()]),
  //   acceptTos: Joi.boolean().truthy("yes").valid(true).reuired(),
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
