const mongoose = require("mongoose");

const SectionCollegeSchema = new mongoose.Schema({
  section_title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("sectionCollege", SectionCollegeSchema);
