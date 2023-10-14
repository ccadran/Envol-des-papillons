import React from "react";

const HeroHome = () => {
  return (
    <div className="hero-home">
      <div className="hero-banner">
        <div className="hero-text">
          <h1>L'envol des papillons</h1>
          <p id="sub-hero">École & Collège d'inspiration Montessori</p>
          <p id="catch-phrase">
            L'école alternative dont votre enfant a besoin
          </p>
        </div>
        <div className="hero-illustration">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/Group 1.svg"}
            alt="Ensemble des logos des établissements"
          />
        </div>
      </div>
      <div className="hero-presentation">
        <div className="img-container">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/img/etablissement-methodo.jpg"
            }
            alt="illustration Montessori de la page d'accueil"
          />
        </div>
        <div className="pres-text">
          <h4>
            L’envol des papillons, c’est le projet d’une scolarité pas comme les
            autres.
          </h4>
          <p>
            Nos objectifs : Encadrer et accompagner nos élèves dans une
            instruction positive et bienveillante et leur donner les moyens de
            devenir acteurs de leurs apprentissages. Leur offrir les meilleures
            chances de concrétiser leurs projets, maitriser leurs choix,
            s’intégrer et s’épanouir dans le monde. <br /> <br />
            Nous encourageons l’autonomie, le respect, la tolérance, la
            curiosité… et tellement plus encore !
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
