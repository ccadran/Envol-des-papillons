import React from "react";
import "styles/ecole&college/shared/_schoolRoad.scss";

const SchoolRoad = ({ text }) => {
  return (
    <section className="school-way">
      <h3>Se rendre à l'école</h3>
      <p>{text}</p>
      <img
        src=""
        alt="maps API
      "
      />
    </section>
  );
};

export default SchoolRoad;
