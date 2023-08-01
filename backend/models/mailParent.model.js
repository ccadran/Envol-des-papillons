const mongoose = require("mongoose");

const mailParentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  childName: {
    type: String,
    required: true,
  },
  childName2: {
    type: String,
    required: false,
  },
  childName3: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("mailParent", mailParentSchema);
