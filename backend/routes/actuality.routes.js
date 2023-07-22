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

router.post(
  "/",
  upload.fields([
    { name: "mainImg", maxCount: 1 },
    { name: "illustrations", maxCount: 10 },
  ]),
  setActualityPost
);
router.put(
  "/:id",
  upload.fields([
    { name: "mainImg", maxCount: 1 },
    { name: "illustrations", maxCount: 10 },
  ]),
  editActualityPost
);

router.delete("/:id", deleteActualityPost);

module.exports = router;
