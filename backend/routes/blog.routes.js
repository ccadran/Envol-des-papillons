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

router.post("/", upload.single("mainImg"), setBlogPost);

router.put("/:id", editBlogPost);

router.delete("/:id", deleteBlogPost);

module.exports = router;
