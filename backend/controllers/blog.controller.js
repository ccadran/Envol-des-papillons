const BlogPostModel = require("../models/blogPost.model");

module.exports.getBlogPost = async (req, res) => {
  const blogPosts = await BlogPostModel.find();
  res.status(200).json(blogPosts);
};

module.exports.setBlogPost = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Le message est obligatoire" });
  }
  const blogPosts = await BlogPostModel.create({
    title: req.body.title,
    accroche: req.body.accroche,
    // tags: req.body.tags,
    introduction: req.body.introduction,
    subTitle: req.body.subTitle,
    content1: req.body.content1,
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(blogPosts);
};

module.exports.editBlogPost = async (req, res) => {
  const blogPost = await BlogPostModel.findById(req.params.id);

  if (!blogPost) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updateBlogPost = await BlogPostModel.findByIdAndUpdate(
    blogPost,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateBlogPost);
};

module.exports.deleteBlogPost = async (req, res) => {
  const blogPost = await BlogPostModel.findById(req.params.id);
  if (!blogPost) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  await blogPost.deleteOne();
  res.status(200).json("Message supprimé " + req.params.id);
};