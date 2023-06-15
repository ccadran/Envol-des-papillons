const express = require("express");
const {
  getAdmin,
  setAdmin,
  editAdmin,
  deleteAdmin,
} = require("../controllers/admin.controller");

const router = express.Router();
router.get("/", getAdmin);

router.post("/", setAdmin);

router.put("/:id", editAdmin);

router.delete("/:id", deleteAdmin);
module.exports = router;
