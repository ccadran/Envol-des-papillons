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
mailParentSchema.statics.deleteParentsByEmail = async function (email) {
  const ParentModel = require("./parent.model");
  await ParentModel.deleteMany({ email });
  console.log(mailParent.email);
};

module.exports = mongoose.model("mailParent", mailParentSchema);
