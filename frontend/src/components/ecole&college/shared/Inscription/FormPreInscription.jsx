import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormPreInscription = () => {
  const form = useRef();
  console.log(process.env.REACT_APP_MAIL_KEY);

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_zknowls",
        "template_1pk9c1f",
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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required />
      <label>Email</label>
      <input type="email" name="email" required autoComplete="off" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Envoyer" />
      <div className="form-message"></div>
    </form>
  );
};

export default FormPreInscription;
