const mongoose = require("mongoose");

const mailParentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  childNames: {
    type: [String],
    required: false,
  },
});

module.exports = mongoose.model("mailParent", mailParentSchema);
