import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";
import Button from "../../../shared/Button";
import { useLocation } from "react-router-dom";
// import "styles/ecole&college/Presentation/_heroScolarity.scss";

const HeroScolarity = ({ h1, img, text, color }) => {
  return (
    <section className="hero">
      <StylizedH1 h1={h1} color={color} />
      <div className="hero-presentation">
        <div className="img-container">
          <img src={img} alt="img de pres" />
        </div>
        <div className="hero-infos">
          <div className="hero-text">
            <h4>Présentation</h4>
            <p>{text}</p>
          </div>
          <Button color={color} text="Découvrir l'histoire" />
        </div>
      </div>
    </section>
  );
};

export default HeroScolarity;
