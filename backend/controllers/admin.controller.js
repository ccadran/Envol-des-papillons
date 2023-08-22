const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminModel = require("../models/admin.model");

module.exports.getAdmin = async (req, res) => {
  const admin = await AdminModel.find();
  res.status(200).json(admin);
};

module.exports.setAdmin = async (req, res) => {
  if (!req.body.password) {
    res.status(400).json({ message: "Le mot de passe est obligatoire" });
  }
  try {
    // Générez le hachage du mot de passe
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const admin = await AdminModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: hashedPassword, // Stockez le mot de passe haché dans la base de données
    });

    res.status(200).json(admin);
  } catch (error) {
    // Gérez les erreurs liées au hachage du mot de passe ou à l'enregistrement du admin
    res.status(500).json(error.message);
  }
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

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Vérifiez si l'e-mail du admin existe dans la base de données
    const admin = await AdminModel.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: "Username incorrecte" });
    }

    // Vérifiez le mot de passe fourni avec le mot de passe haché stocké dans la base de données
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }
    const payload = {
      user: {
        id: admin._id,
        username: admin.username,
        // Vous pouvez également ajouter d'autres informations liées à l'utilisateur ici
      },
    };
    // Ici, vous pouvez créer une session pour le admin ou générer un jeton d'accès JWT pour l'authentification.
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "5min",
    });
    // Réponse réussie - Vous pouvez également renvoyer un jeton d'accès JWT ici
    res.status(200).json({ token });
  } catch (error) {
    console.error("Erreur lors de la connexion du admin :", error);
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
};
