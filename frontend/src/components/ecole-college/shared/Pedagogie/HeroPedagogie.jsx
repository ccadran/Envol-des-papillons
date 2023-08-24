import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";
import { useLocation } from "react-router-dom";

const HeroPedagogie = ({ h1, title, text, image }) => {
  return (
    <section className="hero">
      <StylizedH1 h1={h1} />
      <div className="hero-presentation">
        <div className="img-container">
          <img src={image} alt="img de presentation" />
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
