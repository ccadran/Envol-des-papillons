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
          <img src={img} alt="illustration de la scolarité" />
        </div>
        <div className="hero-infos">
          <div className="hero-text">
            <h4>Présentation</h4>
            <p>
              Le collège alternatif L’envol a été créé en 2020, dans la démarche
              d’assurer la continuité de l’école élémentaire « L’envol des
              papillons ». C’est un collège à très petits effectifs (une dizaine
              d'élèves par niveau), permettant de répondre aux besoins de chacun
              et favorisant leur épanouissement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroScolarity;
