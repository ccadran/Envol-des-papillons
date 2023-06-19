import React from "react";
import logo from "../../../assets/img/logo.svg";
import Button from "../shared/Button";

const ClasseSchoolPedagogie = ({ classe, teachers }) => {
  return (
    <div className="classe-card">
      <h4>{classe}</h4>
      <img src={logo} alt="" width={50} />
      <p>{teachers}</p>
      <Button text="Les horraires" color="orange" />
    </div>
  );
};

export default ClasseSchoolPedagogie;
