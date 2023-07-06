const express = require("express");
const {
  getBlogTag,
  setBlogTag,
  editBlogTag,
  deleteBlogTag,
  getBlogTagById,
} = require("../controllers/blogTag.controller");

const router = express.Router();
router.get("/", getBlogTag);
router.get("/:id", getBlogTagById);

router.post("/", setBlogTag);

router.put("/:id", editBlogTag);

router.delete("/:id", deleteBlogTag);

module.exports = router;
