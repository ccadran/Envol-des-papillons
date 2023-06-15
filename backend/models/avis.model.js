const mongoose = require("mongoose");

const AvisSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    //ecole ou college
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("avis", AvisSchema);
