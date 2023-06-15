const express = require("express");
const {
  getSection,
  setSection,
  editSection,
  deleteSection,
} = require("../controllers/faqSection.controller");

const router = express.Router();
router.get("/", getSection);

router.post("/", setSection);

router.put("/:id", editSection);

router.delete("/:id", deleteSection);
module.exports = router;
