const BlogPostModel = require("../models/blogPost.model");

module.exports.getBlogPost = async (req, res) => {
  const blogPosts = await BlogPostModel.find();
  res.status(200).json(blogPosts);
};

module.exports.setBlogPost = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Le message est obligatoire" });
  }
  const {
    title,
    accroche,
    tags,
    introduction,
    subTitle1,
    content1,
    subTitle2,
    content2,
    author,
  } = req.body;

  const blogPosts = await BlogPostModel({
    title,
    accroche,
    tags: Array.isArray(tags) ? tags : [tags], // Assurez-vous que tags est un tableau
    introduction,
    subTitle1,
    content1,
    subTitle2,
    content2,
    author,
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
