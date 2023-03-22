const express = require("express");
require("./db/connect");
const studentRouter = require("./router/student");

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, (req, res) => {
  console.log("http://localhost:3000");
});
