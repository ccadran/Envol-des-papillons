const BlogPostModel = require("../models/blogPost.model");

module.exports.getBlogPost = async (req, res) => {
  const blogPosts = await BlogPostModel.find();
  res.status(200).json(blogPosts);
};

module.exports.getBlogPostById = async (req, res) => {
  const blogPost = await BlogPostModel.findById(req.params.id);
  if (!blogPost) {
    res.status(404).json({ message: "Cet article d'actualité n'existe pas" });
  } else {
    res.status(200).json(blogPost);
  }
};

module.exports.setBlogPost = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ title: "Le titre est obligatoire" });
  }

  const mainImages = req.files["mainImg"];
  const illustrationImages = req.files["illustrations"];
  console.log("illustrations iamges :", illustrationImages);
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

  try {
    // Prepare the mainImgPaths array for saving in the database
    const mainImgPaths = mainImages.map(
      (image) => "/uploads/" + image.filename
    );

    // Prepare the illustrationPaths array for saving in the database
    const illustrationPaths = illustrationImages.map(
      (image) => "/uploads/" + image.filename
    );

    const blogPost = new BlogPostModel({
      title,
      accroche,
      tags: Array.isArray(tags) ? tags : [tags],
      introduction,
      subTitle1,
      content1,
      subTitle2,
      content2,
      author,
      mainImg: mainImgPaths, // Save the array of main image paths in the database
      illustrations: illustrationPaths, // Save the array of illustration paths in the database
    });

    await blogPost.save();

    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.editBlogPost = async (req, res) => {
  const blogPost = await BlogPostModel.findById(req.params.id);

  if (!blogPost) {
    return res.status(400).json({ message: "Ce post n'existe pas" });
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

  try {
    const mainImages = req.files["mainImg"] || [];
    const illustrationImages = req.files["illustrations"] || [];

    // Prepare the mainImgPaths array for saving in the database
    const mainImgPaths = mainImages.map(
      (image) => "/uploads/" + image.filename
    );

    // Prepare the illustrationPaths array for saving in the database
    const illustrationPaths = illustrationImages.map(
      (image) => "/uploads/" + image.filename
    );

    // Update the blog post document
    blogPost.title = title;
    blogPost.accroche = accroche;
    blogPost.tags = Array.isArray(tags) ? tags : [tags];
    blogPost.introduction = introduction;
    blogPost.subTitle1 = subTitle1;
    blogPost.content1 = content1;
    blogPost.subTitle2 = subTitle2;
    blogPost.content2 = content2;
    blogPost.author = author;
    blogPost.mainImg = mainImgPaths; // Add new main images to existing ones
    blogPost.illustrations = illustrationPaths; // Add new illustrations to existing ones

    await blogPost.save();

    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.deleteBlogPost = async (req, res) => {
  const blogPost = await BlogPostModel.findById(req.params.id);
  if (!blogPost) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  await blogPost.deleteOne();
  res.status(200).json("Message supprimé " + req.params.id);
};
