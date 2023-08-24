import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";
import { useLocation } from "react-router-dom";

const HeroFAQ = ({ subTitle, text }) => {
  return (
    <section className="hero">
      <div className="hero-FAQ">
        <StylizedH1 h1="FAQ" />
        <h4>{subTitle}</h4>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default HeroFAQ;
