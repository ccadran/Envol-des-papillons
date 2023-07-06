const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
port = 5001;

//connexion DB
connectDB();

const app = express();

//Authorisation CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//Middleware qui permet de traiter les données de la Requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importer les routes
app.use("/actuality", require("./routes/actuality.routes"));
app.use("/blog", require("./routes/blog.routes"));
app.use("/blogTag", require("./routes/blogTag.routes"));

app.use("/avis", require("./routes/avis.routes"));
app.use("/faqSectionSchool", require("./routes/faqSectionSchool.routes"));
app.use("/faqQuestionSchool", require("./routes/faqQuestionSchool.routes"));
app.use("/faqSectionCollege", require("./routes/faqSectionCollege.routes"));
app.use("/faqQuestionCollege", require("./routes/faqQuestionCollege.routes"));
app.use("/parent", require("./routes/parent.routes"));
app.use("/admin", require("./routes/admin.routes"));
app.use("/teacher", require("./routes/teacher.routes"));

//Lancer le serveur
app.listen(port, () => console.log("le serveur a démaré au port " + port));
