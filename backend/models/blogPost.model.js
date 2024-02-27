const mongoose = require("mongoose");
const { array } = require("../middleware/upload");

const BlogPostSchema = mongoose.Schema(
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

    mainImg: [
      {
        type: String, // Le type doit être String pour stocker les chemins d'URL complets
        required: true,
      },
    ],
    illustrations: [
      {
        type: String, // Le type doit être String pour stocker les chemins d'URL complets
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

BlogPostSchema.path("tags").validate(function (value) {
  return value && value.length > 0;
}, "Au moins un tag est requis.");

module.exports = mongoose.model("blog", BlogPostSchema);
