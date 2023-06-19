import React from "react";
import logo from "../../assets/logos/papillon.svg";

const PapillonLogo = ({ color }) => {
  return <img src={logo} width={50} alt="Papillon" style={{ fill: color }} />;
};

export default PapillonLogo;
