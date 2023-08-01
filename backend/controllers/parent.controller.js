const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ParentModel = require("../models/Parent.model");

module.exports.getParent = async (req, res) => {
  const parent = await ParentModel.find();
  res.status(200).json(parent);
};

module.exports.setParent = async (req, res) => {
  if (!req.body.password) {
    res.status(400).json({ message: "Le mot de passe est obligatoire" });
  }
  try {
    // Générez le hachage du mot de passe
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const parent = await ParentModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      // email: req.body.email,
      password: hashedPassword, // Stockez le mot de passe haché dans la base de données
    });

    res.status(200).json(parent);
  } catch (error) {
    // Gérez les erreurs liées au hachage du mot de passe ou à l'enregistrement du parent
    res.status(500).json({ error });
  }
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

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Vérifiez si l'e-mail du parent existe dans la base de données
    const parent = await ParentModel.findOne({ username });

    if (!parent) {
      return res.status(401).json({ message: "Username incorrecte" });
    }

    // Vérifiez le mot de passe fourni avec le mot de passe haché stocké dans la base de données
    const passwordMatch = await bcrypt.compare(password, parent.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }
    const payload = {
      user: {
        id: parent._id,
        username: parent.username,
        // Vous pouvez également ajouter d'autres informations liées à l'utilisateur ici
      },
    };
    // Ici, vous pouvez créer une session pour le parent ou générer un jeton d'accès JWT pour l'authentification.
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "5min",
    });
    // Réponse réussie - Vous pouvez également renvoyer un jeton d'accès JWT ici
    res.status(200).json({ token });
  } catch (error) {
    console.error("Erreur lors de la connexion du parent :", error);
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
};
