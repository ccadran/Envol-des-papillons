const express = require("express");
const {
  getActualityPost,
  setActualityPost,
  editActualityPost,
  deleteActualityPost,
  getActualityPostById,
} = require("../controllers/actuality.controller");
const upload = require("../middleware/upload");

const router = express.Router();

router.get("/", getActualityPost);
router.get("/:id", getActualityPostById);

router.post("/", upload.single("mainImg"), setActualityPost);

router.put("/:id", editActualityPost);

router.delete("/:id", deleteActualityPost);

module.exports = router;
