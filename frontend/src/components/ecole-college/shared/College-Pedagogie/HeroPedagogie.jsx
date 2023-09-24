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
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPedagogie;
