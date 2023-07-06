const blogTagModel = require("../models/blogTag.model");

module.exports.getBlogTag = async (req, res) => {
  const blogTags = await blogTagModel.find();
  res.status(200).json(blogTags);
};

module.exports.setBlogTag = async (req, res) => {
  if (!req.body.tag_name) {
    res.status(400).json({ message: "Le Tag est obligatoire" });
  }
  const blogTag = await blogTagModel.create({
    tag_name: req.body.tag_name,
  });
  res.status(200).json(blogTag);
};

module.exports.editBlogTag = async (req, res) => {
  const blogTag = await blogTagModel.findById(req.params.id);

  if (!blogTag) {
    res.status(400).json({ message: "Ce Tag n'existe pas" });
  }

  const updateBlogTag = await blogTagModel.findByIdAndUpdate(
    blogTag,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateBlogTag);
};

module.exports.deleteBlogTag = async (req, res) => {
  const blogTag = await blogTagModel.findById(req.params.id);
  if (!blogTag) {
    res.status(400).json({ message: "Ce Tag n'existe pas" });
  }

  await blogTag.deleteOne();
  res.status(200).json("Tag supprimé " + req.params.id);
};

module.exports.getBlogTagById = async (req, res) => {
  const tagId = req.params.id;
  try {
    const tag = await blogTagModel.findById(tagId);
    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json(tag);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
