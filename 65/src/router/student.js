const express = require("express");
const Student = require("../models/student");
const router = new express.Router();

// Create A New Students without Async-Await
// router.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// });

// Create A New Students with Async-Await
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    // const name = req.params.name;
    const studentData = await Student.findById({ _id });
    // const studentData = await Student.find({ name });
    console.log(studentData);
    if (!studentData) {
      res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.send(e);
  }
});

//Update the students By ID
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    // const studentPatch = await
    const patchStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(patchStudent);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteStudent);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
