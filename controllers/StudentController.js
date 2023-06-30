const Student = require("../models/StudentModel");

const StudentController = {
  async getAllStudents(req, res, next) {
    const allStudents = await Student.find({}).sort({ createdAt: -1 });

    res.locals.allStudents = allStudents;
    return next();
  },
  async getStudent(req, res, next) {
    const studentName = req.params.name;
    const student = await Student.findOne({ firstName: studentName });

    if (!student) {
      return next({
        log: "Express error handler caught middleware error when getting student",
        message: { err: "Student does not exist" },
      });
    }

    res.locals.studentFound = student;
    return next();
  },
  async createStudent(req, res, next) {
    const { firstName, lastName, userName, story, score } = req.body;
    try {
      const student = await Student.create({
        firstName,
        lastName,
        userName,
        story,
        score,
      });
      res.locals.newStudent = student;
      return next();
    } catch (err) {
      return next({
        log: "Express error handler caught middleware error when creating student",
        message: { err: err },
      });
    }
  },
  async deleteStudent(req, res, next) {
    const studentName = req.params.name;
    const student = await Student.findOneAndDelete({ firstName: studentName });

    if (!student) {
      return next({
        log: "Express error handler caught middleware error when deleting student",
        message: { err: "Student does not exist" },
      });
    }

    return next();
  },
  async updateStudent(req, res, next) {
    const studentName = req.params.name;

    const student = await Student.findOneAndUpdate(
      { firstName: studentName },
      { ...req.body }
    );

    if(!student){
      return next({
        log: "Express error handler caught middleware error when updating student",
        message: { err: "Student does not exist" },
      });

      return next();
    }
  },
};

module.exports = StudentController;
