const ActualityPostModel = require("../models/actualityPost.model");

module.exports.getActualityPost = async (req, res) => {
  const actualityPosts = await ActualityPostModel.find();
  res.status(200).json(actualityPosts);
};

module.exports.getActualityPostById = async (req, res) => {
  const actualityPost = await ActualityPostModel.findById(req.params.id);
  if (!actualityPost) {
    res.status(404).json({ message: "Cet article d'actualité n'existe pas" });
  } else {
    res.status(200).json(actualityPost);
  }
};
module.exports.setActualityPost = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ title: "Le titre est obligatoire" });
  }

  const mainImages = req.files["mainImg"];
  const illustrationImages = req.files["illustrations"];

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

    const actualityPost = new ActualityPostModel({
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

    await actualityPost.save();

    res.status(200).json(actualityPost);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports.editActualityPost = async (req, res) => {
  const actualityPost = await ActualityPostModel.findById(req.params.id);

  if (!actualityPost) {
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
    actualityPost.title = title;
    actualityPost.accroche = accroche;
    actualityPost.tags = Array.isArray(tags) ? tags : [tags];
    actualityPost.introduction = introduction;
    actualityPost.subTitle1 = subTitle1;
    actualityPost.content1 = content1;
    actualityPost.subTitle2 = subTitle2;
    actualityPost.content2 = content2;
    actualityPost.author = author;
    actualityPost.mainImg = mainImgPaths; // Add new main images to existing ones
    actualityPost.illustrations = illustrationPaths; // Add new illustrations to existing ones

    await actualityPost.save();

    res.status(200).json(actualityPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.deleteActualityPost = async (req, res) => {
  const actualityPost = await ActualityPostModel.findById(req.params.id);
  if (!actualityPost) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  await actualityPost.deleteOne();
  res.status(200).json("Message supprimé " + req.params.id);
};
