const express = require("express");
const {
  getMailParent,
  deleteMailParent,
  editMailParent,
  setMailParent,
} = require("../controllers/mailParent.controller");

const router = express.Router();
router.get("/", getMailParent);

router.post("/", setMailParent);

router.put("/:id", editMailParent);

router.delete("/:id", deleteMailParent);
module.exports = router;
