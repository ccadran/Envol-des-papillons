import React from "react";

const logoViolet = process.env.PUBLIC_URL + "/assets/logos/papillon.svg";
const logoBlue = process.env.PUBLIC_URL + "/assets/logos/papillonBlue.svg";
const logoCorail = process.env.PUBLIC_URL + "/assets/logos/papillonCorail.svg";

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
    <img src={logoSrc} alt="Papillon" style={{ fill: color }} id="papillon" />
  );
};

export default PapillonLogo;
