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

// module.exports.setActualityPost = async (req, res) => {
//   if (!req.body.title) {
//     res.status(400).json({ title: "Le titre est obligatoire" });
//   }
//   const {
//     title,
//     accroche,
//     tags,
//     introduction,
//     subTitle1,
//     content1,
//     subTitle2,
//     content2,
//     author,
//   } = req.body;

//   try {
//     const actualityPost = await ActualityPostModel.create({
//       title,
//       accroche,
//       tags: Array.isArray(tags) ? tags : [tags], // Assurez-vous que tags est un tableau
//       introduction,
//       subTitle1,
//       content1,
//       subTitle2,
//       content2,
//       author,
//     });

//     res.status(200).json(actualityPost);
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "Une erreur s'est produite lors de la création de l'article d'actualité",
//     });
//   }
// };
module.exports.setActualityPost = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ title: "Le titre est obligatoire" });
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
