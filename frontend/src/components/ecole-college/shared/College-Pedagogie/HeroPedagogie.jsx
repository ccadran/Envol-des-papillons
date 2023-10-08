import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";

const HeroPedagogie = ({ h1, title, text, image }) => {
  return (
    <section className="hero">
      <StylizedH1 h1={h1} />
      <div className="hero-presentation">
        <div className="img-container">
          <img
            src={image}
            alt="illustration de la presentation de la pédagogie"
            loading="lazy"
          />
        </div>
        <div className="hero-text">
          <h4>{title}</h4>
          <p>
            Le collège souhaite rester fidèle aux valeurs de l’école d’origine :
            <span> écoute, harmonie, créativité et confiance en soi</span>.
            L’adaptation aux besoins fondamentaux des enfants et des adolescents
            est au cœur du projet du collège, tout cela dans le{" "}
            <span>
              {" "}
              respect du socle commun de connaissances de l’Education Nationale
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPedagogie;
