const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  section_title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("section", SectionSchema);
