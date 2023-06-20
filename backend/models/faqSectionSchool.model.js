const mongoose = require("mongoose");

const SectionSchoolSchema = new mongoose.Schema({
  section_title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("sectionSchool", SectionSchoolSchema);
