const mongoose = require("mongoose");

const mailParent = new mongoose.Schema({
  mail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("mail", mailParent);
