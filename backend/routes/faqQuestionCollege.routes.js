const express = require("express");
const {
  getQuestion,
  setQuestion,
  editQuestion,
  deleteQuestion,
} = require("../controllers/faqQuestionCollege.controller");

const router = express.Router();
router.get("/", getQuestion);

router.post("/", setQuestion);

router.put("/:id", editQuestion);

router.delete("/:id", deleteQuestion);
module.exports = router;
