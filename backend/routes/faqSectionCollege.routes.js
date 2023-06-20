const express = require("express");
const {
  getSection,
  setSection,
  editSection,
  deleteSection,
} = require("../controllers/faqSectionCollege.controller");

const router = express.Router();
router.get("/", getSection);

router.post("/", setSection);

router.put("/:id", editSection);

router.delete("/:id", deleteSection);
module.exports = router;
