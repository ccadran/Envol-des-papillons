import React from "react";
import { Link } from "react-router-dom";
import imgContact from "assets/img/contact.jpg";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita
        dolores in vero illo maiores perferendis, provident nobis, tempore
        dolore incidunt suscipit alias non sint quibusdam nostrum id rem! Harum.
      </p>
      <div className="contact">
        <p>lenvoldespapillons@gmail.com</p>
        <p>06 01 44 17 72</p>
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
        <img src={imgContact} alt="" />
      </div>
    </div>
  );
};

export default ContactInfo;
