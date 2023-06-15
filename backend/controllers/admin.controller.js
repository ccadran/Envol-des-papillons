const AdminModel = require("../models/Admin.model");

module.exports.getAdmin = async (req, res) => {
  const admin = await AdminModel.find();
  res.status(200).json(admin);
};

module.exports.setAdmin = async (req, res) => {
  if (!req.body.password) {
    res.status(400).json({ message: "Le mot de passe est obligatoire" });
  }
  const admin = await AdminModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
  });
  res.status(200).json(admin);
};

module.exports.editAdmin = async (req, res) => {
  const admin = await AdminModel.findById(req.params.id);

  if (!admin) {
    res.status(400).json({ message: "Ce admin n'existe pas" });
  }

  const updateAdmin = await AdminModel.findByIdAndUpdate(admin, req.body, {
    new: true,
  });

  res.status(200).json(updateAdmin);
};

module.exports.deleteAdmin = async (req, res) => {
  const admin = await AdminModel.findById(req.params.id);
  if (!admin) {
    res.status(400).json({ message: "Ce admin n'existe pas" });
  }

  await admin.deleteOne();
  res.status(200).json("Admin supprimé " + req.params.id);
};
