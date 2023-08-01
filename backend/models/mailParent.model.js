const mongoose = require("mongoose");

const mailParentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  childNames: {
    type: [String], // Définir le champ childNames comme un tableau de chaînes de caractères
    required: false, // Vous pouvez modifier ceci en fonction de votre logique d'application
  },
});

module.exports = mongoose.model("mailParent", mailParentSchema);
