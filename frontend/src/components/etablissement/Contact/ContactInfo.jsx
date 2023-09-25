import React from "react";
import { Link } from "react-router-dom";
import imgContact from "assets/img/contact.jpg";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>
        Pour tout renseignement supplémentaire, vous pouvez nous contacter via
        ce formulaire ou avec les informations de contact ci-dessous.
      </p>
      <div className="contact">
        <a href="mailto:contact@lenvoldespapillons33.com ">
          contact@lenvoldespapillons33.com
        </a>

        <a href="tel:+33 6 05 39 03 73">06 05 39 03 73</a>

        <div className="social-logos">
          <Link to="https://www.instagram.com/ecole.montessori_bordeaux/">
            <i class="fa-brands fa-instagram"></i>{" "}
          </Link>
          <Link to="https://www.facebook.com/lenvolBordeauxmetropole">
            <i class="fa-brands fa-facebook"></i>{" "}
          </Link>
        </div>
      </div>
      <div className="img-container">
        <img
          src={imgContact}
          alt="illustration de la prise de contact"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
