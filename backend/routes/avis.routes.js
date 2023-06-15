const express = require("express");
const {
  getAvis,
  setAvis,
  editAvis,
  deleteAvis,
} = require("../controllers/avis.controller");

const router = express.Router();
router.get("/", getAvis);

router.post("/", setAvis);

router.put("/:id", editAvis);

router.delete("/:id", deleteAvis);
module.exports = router;
