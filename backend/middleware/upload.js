const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // const uploadPath = path.join(__dirname, "../../frontend/public/uploads/");
    const uploadPath = path.join(__dirname, "../.././backend/uploads");
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const fileFilter = function (req, file, cb) {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/JPG" ||
    file.mimetype == "image/JPEG" ||
    file.mimetype == "image/PNG"
  ) {
    cb(null, true);
  } else {
    console.log("only jpg & png file supported");
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});

module.exports = upload;
