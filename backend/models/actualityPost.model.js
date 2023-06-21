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
    tags: {
      type: [String], // Champ de type tableau contenant des chaînes de caractères
      enum: ["tag1", "tag2", "tag3", "tag4"], // Liste des tags disponibles
      required: true,
    },
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
