const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://pramit:pramit%4097250@cluster0.diyx50x.mongodb.net/test", {
//   .connect("mongodb://127.0.0.1:27017/Auth", {
    // useNewUrlParser: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connection Susscessful");
  })
  .catch((error) => {
    console.log("No Connection");
  });

// mongodb+srv://pramit:pramit%4097250@cluster0.diyx50x.mongodb.net/test

// mongodb+srv://pramit:pramit%4097250@cluster0.diyx50x.mongodb.net/test
