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
            L’école L’envol des papillons est une école alternative fonctionnant
            principalement avec la pédagogie de <span> Maria Montessori</span>,
            tout particulièrement en maternelle. <br /> En élémentaire, nous
            utilisons également d’autres méthodes, qui nous permettent de
            correspondre au mieux aux différents profils des enfants.
            <br />
            <br />
            <span>
              L’écoute, l’harmonie, la créativité et la confiance en soi…
            </span>
            l’adaptation aux besoins fondamentaux des enfants sont au cœur de
            notre projet, tout cela dans le respect du socle commun de
            connaissances de l’Education Nationale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPedagogie;
