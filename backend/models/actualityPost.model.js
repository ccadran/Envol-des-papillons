const mongoose = require("mongoose");

const ActualityPostSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    accroche: {
      type: String,
      required: true,
    },
    // //img a upload
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId, // Type de référence à l'ID d'un document dans une autre collection
        ref: "blogTag", // Nom du modèle de la table blogTag
      },
    ],
    introduction: {
      type: String,
      required: true,
    },
    subTitle1: {
      type: String,
      required: true,
    },
    content1: {
      type: String,
      required: true,
    },
    subTitle2: {
      type: String,
      required: false,
    },
    content2: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("actuality", ActualityPostSchema);
