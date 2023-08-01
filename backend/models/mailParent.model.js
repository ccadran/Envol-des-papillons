const mongoose = require("mongoose");

const mailParentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("mailParent", mailParentSchema);
