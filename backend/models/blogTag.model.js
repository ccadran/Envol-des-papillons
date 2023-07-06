const mongoose = require("mongoose");

const blogTagSchema = new mongoose.Schema({
  tag_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("blogTag", blogTagSchema);
