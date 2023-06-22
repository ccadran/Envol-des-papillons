const express = require("express");
const {
  setBlogPost,
  getBlogPost,
  editBlogPost,
  deleteBlogPost,
  getBlogPostById,
} = require("../controllers/blog.controller");
const router = express.Router();

router.get("/", getBlogPost);
router.get("/:id", getBlogPostById);

router.post("/", setBlogPost);

router.put("/:id", editBlogPost);

router.delete("/:id", deleteBlogPost);

module.exports = router;
