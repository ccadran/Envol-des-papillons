const ParentModel = require("../models/Parent.model");

module.exports.getParent = async (req, res) => {
  const parent = await ParentModel.find();
  res.status(200).json(parent);
};

module.exports.setParent = async (req, res) => {
  if (!req.body.password) {
    res.status(400).json({ message: "Le mot de passe est obligatoire" });
  }
  const parent = await ParentModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
  });
  res.status(200).json(parent);
};

module.exports.editParent = async (req, res) => {
  const parent = await ParentModel.findById(req.params.id);

  if (!parent) {
    res.status(400).json({ message: "Ce parent n'existe pas" });
  }

  const updateParent = await ParentModel.findByIdAndUpdate(parent, req.body, {
    new: true,
  });

  res.status(200).json(updateParent);
};

module.exports.deleteParent = async (req, res) => {
  const parent = await ParentModel.findById(req.params.id);
  if (!parent) {
    res.status(400).json({ message: "Ce parent n'existe pas" });
  }

  await parent.deleteOne();
  res.status(200).json("Parent supprimé " + req.params.id);
};
