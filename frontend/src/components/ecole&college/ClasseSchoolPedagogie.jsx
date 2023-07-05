import React from "react";
import logo from "../../assets/logos/papillon.svg";
import Button from "../shared/Button";
import PapillonLogo from "../shared/PapillonLogo";

const ClasseSchoolPedagogie = ({ classe, teachers }) => {
  const teacherNames = teachers.split("\n");

  return (
    <div className="classe-card">
      <h4>{classe}</h4>
      <PapillonLogo />
      <ul className="teacher-list">
        {teacherNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <Button text="Les horaires" color="orange" />
    </div>
  );
};

export default ClasseSchoolPedagogie;
