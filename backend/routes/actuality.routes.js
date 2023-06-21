const express = require("express");
const {
  getActualityPost,
  setActualityPost,
  editActualityPost,
  deleteActualityPost,
  getActualityPostById,
} = require("../controllers/actuality.controller");

const router = express.Router();

router.get("/", getActualityPost);
router.get("/:id", getActualityPostById);

router.post("/", setActualityPost);

router.put("/:id", editActualityPost);

router.delete("/:id", deleteActualityPost);

module.exports = router;
