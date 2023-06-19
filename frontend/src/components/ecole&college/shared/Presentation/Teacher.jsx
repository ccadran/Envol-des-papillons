import React from "react";
import PapillonLogo from "../../../shared/PapillonLogo";

const Teacher = ({ teacher }) => {
  return (
    <div className="teacher-card">
      <PapillonLogo />
      <h4>
        {teacher.firstName} {teacher.lastName}
      </h4>
      <p>{teacher.classe}</p>
      <h5>{teacher.poste}</h5>
      <p>
        Formation Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga, fugit. Dignissimos, dolores. Nulla tempore quidem, quas
        necessitatibus nobis cupiditate? Illo?
      </p>
    </div>
  );
};

export default Teacher;
