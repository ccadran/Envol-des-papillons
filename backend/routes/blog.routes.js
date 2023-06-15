const express = require("express");
const {
  setBlogPost,
  getBlogPost,
  editBlogPost,
  deleteBlogPost,
} = require("../controllers/blog.controller");
const router = express.Router();

router.get("/", getBlogPost);

router.post("/", setBlogPost);

router.put("/:id", editBlogPost);

router.delete("/:id", deleteBlogPost);

module.exports = router;
