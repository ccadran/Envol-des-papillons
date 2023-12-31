const mongoose = require("mongoose");

const ParentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    ref: "mailParent",
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("parent", ParentSchema);
