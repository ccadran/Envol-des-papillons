import React from "react";
import { Link } from "react-router-dom";
import chevron from "assets/logos/chevron.svg";

const Back = ({ link }) => {
  return (
    <div className="back">
      <Link to={link}>
        <img src={chevron} alt="chevron" loading="lazy" />
        Retour
      </Link>
    </div>
  );
};

export default Back;
