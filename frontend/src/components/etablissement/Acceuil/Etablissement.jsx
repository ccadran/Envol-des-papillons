import React from "react";
import Button from "../../shared/Button";
//import papillon.svg that is in the public folder
import papillon from "../../../assets/logos/papillon.svg";
const Etablissement = ({ title, text }) => {
  return (
    <div className="etablissement-card">
      <img src={papillon} alt="" width={50} />
      <h4>{title}</h4>
      <p>{text}</p>
      <Button />
    </div>
  );
};

export default Etablissement;
