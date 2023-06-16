import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";
import Button from "../../../shared/Button";
const HeroScolarity = ({ etablissement, img, text, color }) => {
  return (
    <>
      <StylizedH1 etablissement={etablissement} />
      <div className="hero-presentation">
        <img src={img} alt="" />
        <div className="hero-text">
          <h4>Présentation</h4>
          <p>{text}</p>
          <Button color={color} />
        </div>
      </div>
    </>
  );
};

export default HeroScolarity;
