import React from "react";
import StylizedH1 from "../../../shared/StylizedH1";
import { useLocation } from "react-router-dom";

const HeroPedagogie = ({ h1, title, text, image }) => {
  const location = useLocation();
  const isRootPath = location.pathname.includes("/ecole");

  const color = isRootPath
    ? "orange"
    : location.pathname.includes("/college")
    ? "blue"
    : "violet";
  console.log(color);

  return (
    <section className="hero">
      <StylizedH1 h1={h1} color={color} />
      <div className="hero-presentation">
        <img src={image} alt="img de presentation" />
        <div className="hero-text">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPedagogie;
