const express = require("express");
const router = express.Router();
const parentController = require("../controllers/parent.controller");

// Route pour la page de connexion des parents
router.post("/", parentController.login);

module.exports = router;
