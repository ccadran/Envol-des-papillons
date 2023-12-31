const express = require("express");
const {
  getBlogPost,
  setBlogPost,
  editBlogPost,
  deleteBlogPost,
  getBlogPostById,
} = require("../controllers/blog.controller");
const router = express.Router();
const upload = require("../middleware/upload");
router.get("/", getBlogPost);
router.get("/:id", getBlogPostById);

router.post(
  "/",
  upload.fields([
    { name: "mainImg", maxCount: 1 },
    { name: "illustrations", maxCount: 10 },
  ]),
  setBlogPost
);

router.put(
  "/:id",
  upload.fields([
    { name: "mainImg", maxCount: 1 },
    { name: "illustrations", maxCount: 10 },
  ]),
  editBlogPost
);

router.delete("/:id", deleteBlogPost);

module.exports = router;
