import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";
import Button from "../../../shared/Button";
const HeroScolarity = ({ h1, img, text, color }) => {
  return (
    <section className="hero">
      <StylizedH1 h1={h1} />
      <div className="hero-presentation">
        <img src={img} alt="" />
        <div className="hero-text">
          <h4>Présentation</h4>
          <p>{text}</p>
          <Button color={color} />
        </div>
      </div>
    </section>
  );
};

export default HeroScolarity;
