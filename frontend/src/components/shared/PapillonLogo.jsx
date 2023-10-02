import React from "react";
import logoViolet from "../../assets/logos/papillon.svg";
import logoBlue from "../../assets/logos/papillonBlue.svg";
import logoCorail from "../../assets/logos/papillonCorail.svg";

const PapillonLogo = ({ color }) => {
  let logoSrc;

  switch (color) {
    case "violet":
      logoSrc = logoViolet;
      break;
    case "blue":
      logoSrc = logoBlue;
      break;
    case "orange":
      logoSrc = logoCorail;
      break;
    default:
      logoSrc = logoViolet;
  }

  return (
    <img
      src={logoSrc}
      alt="Papillon"
      style={{ fill: color }}
      id="papillon"
      loading="lazy"
    />
  );
};

export default PapillonLogo;
