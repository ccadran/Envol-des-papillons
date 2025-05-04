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
              L’école L’envol des papillons a ouvert en{" "}
              <span>septembre 2012</span> dans le quartier des Chartrons à
              Bordeaux, avec une classe unique de 3-6 ans. <br /> <br />
              En 2015, sous l’impulsion de parents qui souhaitaient que leurs
              enfants poursuivent leur scolarité dans l’école, la classe des
              6-11 ans a été créée, avec un déménagement dans nos locaux actuels
              à la clé.
              <br />
              <br />A ce jour, l’école compte 3 ambiances : les 3-6 ans, les 6-9
              ans et les 9-11 ans, réparties sur les trois niveaux du bâtiment.
              L’école est susceptible de proposer un{" "}
              <a href="/ecole/infos-pratiques">accueil périscolaire</a> le
              mercredi, ainsi que pendant les vacances scolaires.
            </p>
          </div>
          <Button color={color} text="Découvrir l'histoire" link={link} />
        </div>
      </div>
    </section>
  );
};

export default HeroScolarity;
