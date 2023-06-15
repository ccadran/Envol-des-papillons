const express = require("express");
const {
  getParent,
  setParent,
  editParent,
  deleteParent,
} = require("../controllers/parent.controller");

const router = express.Router();
router.get("/", getParent);

router.post("/", setParent);

router.put("/:id", editParent);

router.delete("/:id", deleteParent);
module.exports = router;
