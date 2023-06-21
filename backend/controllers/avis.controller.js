const AvisModel = require("../models/avis.model");

module.exports.getAvis = async (req, res) => {
  const etablissement = req.query.etablissement; // Récupérer la valeur de l'établissement depuis les paramètres de requête

  let avis;
  if (etablissement) {
    avis = await AvisModel.find({ etablissement: etablissement });
  } else {
    avis = await AvisModel.find();
  }

  res.status(200).json(avis);
};
module.exports.setAvis = async (req, res) => {
  if (!req.body.avis || !req.body.etablissement) {
    res
      .status(400)
      .json({ message: "Le message et l'établissement sont obligatoire" });
  }
  const avis = await AvisModel.create({
    avis: req.body.avis,
    prenom: req.body.prenom,
    nom: req.body.nom,
    etablissement: req.body.etablissement,
  });
  res.status(200).json(avis);
};

module.exports.editAvis = async (req, res) => {
  const avis = await AvisModel.findById(req.params.id);

  if (!avis) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updateAvis = await AvisModel.findByIdAndUpdate(avis, req.body, {
    new: true,
  });

  res.status(200).json(updateAvis);
};

module.exports.deleteAvis = async (req, res) => {
  const avis = await AvisModel.findById(req.params.id);
  if (!avis) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  await avis.deleteOne();
  res.status(200).json("Message supprimé " + req.params.id);
};
