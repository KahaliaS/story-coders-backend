const mongoose = require("mongoose");
const { Schema } = mongoose;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here
const student = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    story: {
      type: String,
    },
    score: {
      type: Number,
    },
  },
  { timestamps: true }
);

//student model created
//each student created is added to the model aka db?
const Student = mongoose.model("Student", student);

// You must export your model through module.exports
// The collection name should be 'student'
//exports db
module.exports = Student;
