import React from "react";
import PapillonLogo from "../../../shared/PapillonLogo";
import "styles/ecole-college/Presentation/_pedagogicTeam.scss";

const Teacher = ({ teacher }) => {
  return (
    <article className="teacher-card">
      {teacher.etablissement === "école" ? (
        <PapillonLogo color="orange" />
      ) : (
        <PapillonLogo color="blue" />
      )}
      <div className="name-class">
        <h5>
          {teacher.firstName} {teacher.lastName}
        </h5>
        <p>{teacher.classe}</p>
      </div>
      <h5>{teacher.poste}</h5>
      <p>{teacher.formation}</p>
    </article>
  );
};

export default Teacher;
