const express = require("express");
const router = express.Router();
const studentController = require("../controllers/StudentController");

//GET all students
router.get("/", studentController.getAllStudents, (req, res) => {
  res.status(200).json(res.locals.allStudents);
});

//GET a student
router.get("/:name", studentController.getStudent, (req, res) => {
  res.status(200).json(res.locals.studentFound);
});

//POST a new student
router.post("/", studentController.createStudent, (req, res) => {
  res.status(200).json(res.locals.newStudent);
});

//DELETE a  student
router.delete("/:name", studentController.deleteStudent, (req, res) => {
  res.sendStatus(204);
});

//PATCH a  student
router.patch("/:name", studentController.updateStudent, (req, res) => {
  res.json({ msg: "PATCH or update a student" });
  res.sendStatus(200);
});

module.exports = router;
