const nodemailer = require("nodemailer");

// Configuration du transporteur de messagerie
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "votre_adresse_email@gmail.com",
    pass: "votre_mot_de_passe_email",
  },
});

// Configuration du message à envoyer
const mailOptions = {
  from: "votre_adresse_email@gmail.com",
  to: "destinataire@example.com",
  subject: "Sujet de l'e-mail",
  text: "Corps de l'e-mail",
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
  } else {
    console.log("E-mail envoyé:", info.response);
  }
});
