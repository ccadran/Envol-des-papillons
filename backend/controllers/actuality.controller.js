const { Storage } = require("@google-cloud/storage");
const fs = require("fs");

const ActualityPostModel = require("../models/actualityPost.model");
const storage = new Storage();
const bucket = storage.bucket("blog-storage-envol");

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
  console.log("req.files :", req.files);
  const mainImages = req.files["mainImg"];
  const illustrationImages = req.files["illustrations"] || [];
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
    const fileName = Math.floor(Math.random() * 100000) + Date.now() + "-";
    const mainBlob = bucket.file(
      "uploads/" + fileName + req.files["mainImg"][0].originalname
    );

    const mainBlobStream = mainBlob.createWriteStream();

    mainBlobStream.end(req.files["mainImg"][0].buffer);

    await new Promise((resolve, reject) => {
      mainBlobStream.on("finish", resolve);
      mainBlobStream.on("error", reject);
    });
    const mainImgPaths =
      "https://storage.googleapis.com/blog-storage-envol/uploads/" +
      fileName +
      req.files["mainImg"][0].originalname;
    const illustrationUrls = [];
    if (illustrationImages.length > 0) {
      for (const illustration of req.files["illustrations"]) {
        const fileNameIllustrations =
          Math.floor(Math.random() * 100000) + Date.now() + "-";
        const illustrationBlob = bucket.file(
          "uploads/" + fileNameIllustrations + illustration.originalname
        );

        const illustrationBlobStream = illustrationBlob.createWriteStream();
        illustrationBlobStream.end(illustration.buffer);

        await new Promise((resolve, reject) => {
          illustrationBlobStream.on("finish", resolve);
          illustrationBlobStream.on("error", reject);
        });
        const illustrationPath =
          "https://storage.googleapis.com/blog-storage-envol/uploads/" +
          fileNameIllustrations +
          illustration.originalname;
        illustrationUrls.push(illustrationPath);
      }
    }
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
      illustrations: illustrationUrls, // Save the array of illustration paths in the database
    });

    await actualityPost.save();

    res.status(200).json(actualityPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
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
    let mainImgPaths = actualityPost.mainImg; // Keep the existing main images
    if (mainImages.length > 0) {
      const mainImgUrls = [];
      for (const image of mainImages) {
        const fileName = Math.floor(Math.random() * 100000) + Date.now() + "-";
        const mainBlob = bucket.file(
          "uploads/" + fileName + image.originalname
        );

        const mainBlobStream = mainBlob.createWriteStream();
        mainBlobStream.end(image.buffer);

        await new Promise((resolve, reject) => {
          mainBlobStream.on("finish", resolve);
          mainBlobStream.on("error", reject);
        });

        const mainImgUrl =
          "https://storage.googleapis.com/blog-storage-envol/uploads/" +
          fileName +
          image.originalname;
        mainImgUrls.push(mainImgUrl);
      }
      mainImgPaths = mainImgUrls;
    }

    // Prepare the illustrationPaths array for saving in the database
    let illustrationPaths = actualityPost.illustrations; // Keep the existing illustrations
    if (illustrationImages.length > 0) {
      const illustrationUrls = [];
      for (const illustration of illustrationImages) {
        const fileNameIllustrations =
          Math.floor(Math.random() * 100000) + Date.now() + "-";
        const illustrationBlob = bucket.file(
          "uploads/" + fileNameIllustrations + illustration.originalname
        );

        const illustrationBlobStream = illustrationBlob.createWriteStream();
        illustrationBlobStream.end(illustration.buffer);

        await new Promise((resolve, reject) => {
          illustrationBlobStream.on("finish", resolve);
          illustrationBlobStream.on("error", reject);
        });

        const illustrationPath =
          "https://storage.googleapis.com/blog-storage-envol/uploads/" +
          fileNameIllustrations +
          illustration.originalname;
        illustrationUrls.push(illustrationPath);
      }
      illustrationPaths = illustrationUrls;
    }

    // Update the actuality post document
    actualityPost.title = title;
    actualityPost.accroche = accroche;
    actualityPost.tags = Array.isArray(tags) ? tags : [tags];
    actualityPost.introduction = introduction;
    actualityPost.subTitle1 = subTitle1;
    actualityPost.content1 = content1;
    actualityPost.subTitle2 = subTitle2;
    actualityPost.content2 = content2;
    actualityPost.author = author;
    actualityPost.mainImg = mainImgPaths;
    actualityPost.illustrations = illustrationPaths;

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
