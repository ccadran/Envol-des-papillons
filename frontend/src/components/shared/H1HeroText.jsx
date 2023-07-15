import React from "react";
import StylizedH1 from "./StylizedH1";
import { useLocation } from "react-router-dom";
import "styles/shared/_h1HeroText.scss";

const H1HeroText = ({ h1, text }) => {
  return (
    <div className="hero-text">
      <StylizedH1 h1={h1} />
      <p>{text}</p>
    </div>
  );
};

export default H1HeroText;
