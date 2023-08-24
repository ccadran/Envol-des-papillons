const path = require("path");
const Multer = require("multer");
const { Storage } = require("@google-cloud/storage");

// Configuration du module Multer pour le téléchargement de fichiers
const upload = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});

// Configuration des informations d'identification Google Cloud Storage
const projectId = "envol-des-papillons"; // Remplacez par votre projet ID
console.log("projectId :", projectId);
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS; // Chemin vers votre fichier de clé privée JSON
console.log("keyFilename :", keyFilename);
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket("blog-storage-envol");

module.exports = upload;
