import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>
        Pour tout renseignement supplémentaire, vous pouvez nous contacter via
        ce formulaire ou avec les informations de contact ci-dessous. <br />
        <br />
        Merci de privilégier le mail.
      </p>
      <div className="contact">
        <a href="mailto:envoldespapillons33@outlook.fr ">
          envoldespapillons33@outlook.fr
        </a>

        <a href="tel:+33 6 05 39 03 73">06 05 39 03 73</a>

        <div className="social-logos">
          <Link to="https://www.instagram.com/ecole.montessori_bordeaux/">
            <i className="fa-brands fa-instagram"></i>{" "}
          </Link>
          <Link to="https://www.facebook.com/lenvolBordeauxmetropole">
            <i className="fa-brands fa-facebook"></i>{" "}
          </Link>
        </div>
      </div>
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/contact.jpg"}
          alt="illustration de la prise de contact"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
