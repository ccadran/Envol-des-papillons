const mongoose = require("mongoose");

const AvisSchema = mongoose.Schema(
  {
    avis: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    etablissement: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("avis", AvisSchema);
