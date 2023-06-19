import React from "react";
import Button from "../../shared/Button";
import PapillonLogo from "../../shared/PapillonLogo";

const Etablissement = ({ title, text }) => {
  return (
    <div className="etablissement-card">
      <PapillonLogo color="orange" />
      <h4>{title}</h4>
      <p>{text}</p>
      <Button />
    </div>
  );
};

export default Etablissement;
