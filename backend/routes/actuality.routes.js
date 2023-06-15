const express = require("express");
const {
  getActualityPost,
  setActualityPost,
  editActualityPost,
  deleteActualityPost,
} = require("../controllers/actuality.controller");

const router = express.Router();

router.get("/", getActualityPost);

router.post("/", setActualityPost);

router.put("/:id", editActualityPost);

router.delete("/:id", deleteActualityPost);

module.exports = router;
