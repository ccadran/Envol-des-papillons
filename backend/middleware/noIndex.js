const path = require("path");
const Multer = require("multer");
const { Storage } = require("@google-cloud/storage");

// Middleware pour définir les métadonnées no-index avant le téléchargement
function setNoIndexMetadata(req, file, cb) {
  cb(null, {
    metadata: {
      "x-goog-meta-no-index": "true",
    },
  });
}

module.exports = setNoIndexMetadata;
