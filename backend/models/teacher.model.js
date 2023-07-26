const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  classe: {
    type: String,
    required: true,
  },
  formation: {
    type: String,
    required: true,
  },
  etablissement: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("teacher", TeacherSchema);
