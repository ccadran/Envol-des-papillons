const MailParentModel = require("../models/mailParent.model");

module.exports.getMailParent = async (req, res) => {
  const mailParents = await MailParentModel.find();
  res.status(200).json(mailParents);
};

module.exports.setMailParent = async (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ message: "Le Mail est obligatoire" });
  }

  // Vérifier le format de l'e-mail avec une expression régulière
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(req.body.email)) {
    return res
      .status(400)
      .json({ message: "Le format de l'e-mail est invalide" });
  }

  try {
    console.log(req.body.childName2);
    const mailParent = await MailParentModel.create({
      email: req.body.email,
      childNames: [
        req.body.childName,
        req.body.childName2,
        req.body.childName3,
      ], // Stockez les noms des enfants dans un tableau
    });
    res.status(200).json(mailParent);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de l'e-mail" });
  }
};

module.exports.editMailParent = async (req, res) => {
  const mailParent = await MailParentModel.findById(req.params.id);

  if (!mailParent) {
    res.status(400).json({ message: "Ce Mail n'existe pas" });
  }

  // Mettez à jour les champs individuels ou tout le tableau si nécessaire
  mailParent.email = req.body.email;
  mailParent.childNames = [
    req.body.childName,
    req.body.childName2,
    req.body.childName3,
  ];

  try {
    const updateMailParent = await mailParent.save(); // Sauvegardez les modifications dans la base de données
    res.status(200).json(updateMailParent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'e-mail" });
  }
};

module.exports.deleteMailParent = async (req, res) => {
  const mailParent = await MailParentModel.findById(req.params.id);
  if (!mailParent) {
    res.status(400).json({ message: "Ce Mail n'existe pas" });
  }

  await mailParent.deleteOne();
  res.status(200).json("Mail supprimé " + req.params.id);
};

module.exports.getMailParentById = async (req, res) => {
  const mailId = req.params.id;
  try {
    const mail = await MailParentModel.findById(mailId);
    if (!mail) {
      return res.status(404).json({ message: "Mail not found" });
    }
    res.status(200).json(mail);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
