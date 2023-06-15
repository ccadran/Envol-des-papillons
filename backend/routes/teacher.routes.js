const express = require("express");
const {
  getTeacher,
  setTeacher,
  editTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller");

const router = express.Router();
router.get("/", getTeacher);

router.post("/", setTeacher);

router.put("/:id", editTeacher);

router.delete("/:id", deleteTeacher);
module.exports = router;
