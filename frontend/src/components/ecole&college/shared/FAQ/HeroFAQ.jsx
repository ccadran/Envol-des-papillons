import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";
import { useLocation } from "react-router-dom";

const HeroFAQ = ({ subTitle, text }) => {
  const location = useLocation();
  const isRootPath = location.pathname.includes("/ecole");

  const color = isRootPath
    ? "orange"
    : location.pathname.includes("/college")
    ? "blue"
    : "violet";

  return (
    <section className="hero">
      <div className="hero-FAQ">
        <StylizedH1 h1="FAQ" color={color} />
        <h4>{subTitle}</h4>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default HeroFAQ;
