const router = require("express").Router();
const StudentRegistration = require("../model/model");

router.post("/student", async (req, res) => {
  try {
    const createStudent = new StudentRegistration(req.body);
    const result = await createStudent.save();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Get all students data
router.get("/student", async (req, res) => {
  try {
    const students = await StudentRegistration.find();
    res.send(students);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Get single students data
router.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const student = await StudentRegistration.findOne({ _id });
    res.send(student);
  } catch (error) {
    res.status(404).send(error);
  }
});

// update student by id
router.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await StudentRegistration.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.send(updateStudent);
  } catch (error) {
    res.status(404).send(error);
  }
});

// delete student
router.delete("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedStudent = await StudentRegistration.findByIdAndDelete(_id);
    res.send(deletedStudent);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
