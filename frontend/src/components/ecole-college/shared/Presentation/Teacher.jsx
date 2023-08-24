import React from "react";
import PapillonLogo from "../../../shared/PapillonLogo";
import "styles/ecole-college/Presentation/_pedagogicTeam.scss";

const Teacher = ({ teacher }) => {
  return (
    <div className="teacher-card">
      <PapillonLogo />
      <div className="name-class">
        <h5>
          {teacher.firstName} {teacher.lastName}
        </h5>
        <p>{teacher.classe}</p>
      </div>
      <h5>{teacher.poste}</h5>
      <p>
        Formation Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga, fugit. Dignissimos, dolores.
      </p>
    </div>
  );
};

export default Teacher;
