import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";
import Button from "../../../shared/Button";

const HeroScolarity = ({ h1, img, text, color, etablissement }) => {
  const link = `/${etablissement}/qui-sommes-nous`;
  return (
    <section className="hero">
      <StylizedH1 h1={h1} />
      <div className="hero-presentation">
        <div className="img-container">
          <img src={img} alt="illustration de la scolarité" loading="lazy" />
        </div>
        <div className="hero-infos">
          <div className="hero-text">
            <h4>Présentation</h4>
            <p>{text}</p>
          </div>
          <Button color={color} text="Découvrir l'histoire" link={link} />
        </div>
      </div>
    </section>
  );
};

export default HeroScolarity;
