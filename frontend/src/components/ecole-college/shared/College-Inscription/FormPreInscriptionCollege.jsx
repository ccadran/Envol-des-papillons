import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormPreInscriptionCollege = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_whqad0d",
        "template_1pk9c1f",
        form.current,
        process.env.REACT_APP_MAIL_KEY
      )
      .then(
        (result) => {
          form.current.reset();
          formMessage.innerHTML =
            "<p class='success'>Message envoyé avec succès !</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 5000);
        },
        (error) => {
          formMessage.innerHTML =
            "<p class='error'>Erreur dans le formulaire</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 5000);
        }
      );
  };

  return (
    <div className="pre-inscription-form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-part lastname">
          <label>Nom de l'élève</label>
          <input type="text" name="lastName" placeholder="Doe" required />
        </div>
        <div className="form-part firstName">
          <label>Prénom de l'élève</label>
          <input type="text" name="firstName" placeholder="John" required />
        </div>
        <div className="form-part bornDate">
          <label>Date de naissance</label>
          <input type="date" name="bornDate" placeholder="XX/XX/XXX" required />
        </div>
        <div className="form-part bornPlace">
          <label>Lieu de naissance</label>
          <input type="text" name="bornPlace" placeholder="Bordeaux" required />
        </div>
        <div className="form-part classe">
          <label>Incription en classe de :</label>
          <select name="classe" id="">
            <option value="6eme">Incription en 6ème</option>
            <option value="5eme">Incription en 5ème</option>
            <option value="4eme">Incription en 4ème</option>
            <option value="3eme">Incription en 3ème</option>
          </select>
        </div>
        <div className="form-part lastSchool">
          <label>Établissement précédent</label>
          <textarea
            id="lastSchool"
            type="text"
            name="lastSchool"
            placeholder="Nom et adresse de l'établissement précédent"
            required
          />
        </div>
        <div className="tuteurs">
          <div className="tuteur1">
            <div className="form-part">
              <label>Nom du tuteur 1</label>
              <input
                type="text"
                name="lastName_tuteur1"
                placeholder="Nom du tuteur 1"
                required
              />
            </div>
            <div className="form-part">
              <label>Prénom du tuteur 1</label>
              <input
                type="text"
                name="firstName_tuteur1"
                placeholder="Prénom du tuteur 1"
                required
              />
            </div>
            <div className="form-part">
              <label>Email du tuteur 1</label>
              <input
                type="email"
                name="email_tuteur1"
                placeholder="Prénom du tuteur 1"
                required
              />
            </div>
            <div className="form-part">
              <label>Adresse postale du tuteur 1</label>
              <input
                type="text"
                name="adress_tuteur1"
                placeholder="Adresse du tuteur 1"
                required
              />
            </div>
            <div className="form-part">
              <label>Téléphone du tuteur 1</label>
              <input
                type="text"
                name="phone_tuteur1"
                placeholder="Téléphone du tuteur 1"
                required
              />
            </div>
          </div>
          <div className="tuteur2">
            <div className="form-part">
              <label>Nom du tuteur 2</label>
              <input
                type="text"
                name="lastName_tuteur2"
                placeholder="Nom du tuteur 2"
                required
              />
            </div>
            <div className="form-part">
              <label>Prénom du tuteur 2</label>
              <input
                type="text"
                name="firstName_tuteur2"
                placeholder="Prénom du tuteur 2"
                required
              />
            </div>
            <div className="form-part">
              <label>Email du tuteur 2</label>
              <input
                type="email"
                name="email_tuteur2"
                placeholder="Prénom du tuteur 2"
                required
              />
            </div>
            <div className="form-part">
              <label>Adresse postale du tuteur 2</label>
              <input
                type="text"
                name="adress_tuteur2"
                placeholder="Adresse du tuteur 2"
                required
              />
            </div>
            <div className="form-part">
              <label>Téléphone du tuteur 2</label>
              <input
                type="text"
                name="phone_tuteur2"
                placeholder="Téléphone du tuteur 2"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-part message">
          <label>Message</label>
          <textarea
            id="message"
            type="text"
            name="message"
            placeholder="Expliquez en quelques mots vos motivations pour l'inscription de votre enfant"
            required
          />
        </div>

        <button type="submit">Envoyer le fomulaire</button>
        <div className="form-message"></div>
      </form>
    </div>
  );
};

export default FormPreInscriptionCollege;
