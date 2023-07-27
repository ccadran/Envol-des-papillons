import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { set } from "mongoose";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_zknowls",
        "template_04jhnkj",
        form.current,
        process.env.REACT_APP_MAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMessage.innerHTML =
            "<p class='success'>Message envoyé avec succès !</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            "<p class='error'>Erreur dans le formulaire</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 5000);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-part name">
          <label>Nom</label>
          <input type="text" name="name" placeholder="Votre nom" required />
        </div>
        <div className="form-part email">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="abc@mail.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="form-part subject">
          <label>Objet</label>
          <input
            type="text"
            name="subject"
            placeholder="L'objet de votre message"
            required
          />
        </div>
        <div className="form-part message">
          <label>Message</label>
          <textarea id="text" name="message" placeholder="Votre message" />
        </div>
        <button type="submit">Envoyer</button>
        <div className="form-message"></div>
      </form>
    </div>
  );
};
export default ContactForm;
