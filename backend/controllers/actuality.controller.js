const ActualityPostModel = require("../models/actualityPost.model");

module.exports.getActualityPost = async (req, res) => {
  const actualityPosts = await ActualityPostModel.find();
  res.status(200).json(actualityPosts);
};

module.exports.setActualityPost = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ title: "Le title est obligatoire" });
  }
  const actualityPosts = await ActualityPostModel.create({
    title: req.body.title,
    accroche: req.body.accroche,
    tags: req.body.tags,
    introduction: req.body.introduction,
    subTitle: req.body.subTitle,
    content1: req.body.content1,
    subTitle2: req.body.subTitle2,
    content2: req.body.content2,
    author: req.body.author,
  });
  res.status(200).json(actualityPosts);
};

module.exports.editActualityPost = async (req, res) => {
  const actualityPost = await ActualityPostModel.findById(req.params.id);

  if (!actualityPost) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updateActualityPost = await ActualityPostModel.findByIdAndUpdate(
    actualityPost,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateActualityPost);
};

module.exports.deleteActualityPost = async (req, res) => {
  const actualityPost = await ActualityPostModel.findById(req.params.id);
  if (!actualityPost) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  await actualityPost.deleteOne();
  res.status(200).json("Message supprimé " + req.params.id);
};
