import React from "react";
import logo from "../../assets/logos/papillon.svg";

const PapillonLogo = ({ color }) => {
  return <img src={logo} alt="Papillon" style={{ fill: color, width: 50 }} />;
};

export default PapillonLogo;
