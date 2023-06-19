import React from "react";
import logo from "../../assets/logos/papillon.svg";
import Button from "../shared/Button";
import PapillonLogo from "../shared/PapillonLogo";

const ClasseSchoolPedagogie = ({ classe, teachers }) => {
  return (
    <div className="classe-card">
      <h4>{classe}</h4>
      <PapillonLogo />
      <p>{teachers}</p>
      <Button text="Les horraires" color="orange" />
    </div>
  );
};

export default ClasseSchoolPedagogie;
