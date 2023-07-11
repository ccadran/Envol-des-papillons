import React from "react";
import "styles/parents/shared/_H2HeroText.scss";

const H2HeroText = ({ h2, text }) => {
  return (
    <div className="h2-hero-text">
      <h2>{h2}</h2>
      <p>{text}</p>
    </div>
  );
};

export default H2HeroText;
