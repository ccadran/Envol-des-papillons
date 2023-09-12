import React from "react";
import { Link } from "react-router-dom";
import "styles/shared/_button.scss";
import vector from "assets/logos/Vector.svg";
import arrow from "assets/logos/arrow.svg";

const Button = ({ color, text, link, newTab, isArrow }) => {
  let backgroundColor;

  if (color === "orange") {
    backgroundColor = "#F37A6A";
  } else if (color === "blue") {
    backgroundColor = "#5EC3B5";
  } else if (color === "violet") {
    backgroundColor = "#853894";
  }

  return (
    <Link to={link} target={newTab === "yes" ? "_blank" : undefined}>
      <button style={{ background: backgroundColor }}>
        <img src={vector} alt="étoiles" loading="lazy" />
        <h5>{text}</h5>
        {isArrow !== "no" && (
          <img src={arrow} alt="flèche" id="arrow" loading="lazy" />
        )}
      </button>
    </Link>
  );
};

export default Button;
