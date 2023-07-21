const mongoose = require("mongoose");

const ImageBlogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("imageBlog", ImageBlogSchema);
