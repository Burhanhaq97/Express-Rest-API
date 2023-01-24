const mongoose = require("mongoose");

const studentApiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minLength: 11,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const StudentRegistration = new mongoose.model(
  "StudentRegistration",
  studentApiSchema
);

module.exports = StudentRegistration;
