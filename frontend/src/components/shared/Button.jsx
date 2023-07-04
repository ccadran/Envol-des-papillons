import React from "react";
import { Link } from "react-router-dom";
import "styles/shared/_button.scss";
import vector from "assets/logos/Vector.svg";
import arrow from "assets/logos/arrow.svg";

const Button = ({ color, text, link }) => {
  let backgroundColor;

  if (color === "orange") {
    backgroundColor = "#F37A6A";
  } else if (color === "blue") {
    backgroundColor = "#5EC3B5";
  } else if (color === "violet") {
    backgroundColor = "#853894";
  }

  return (
    <Link to={link}>
      <button style={{ background: backgroundColor }}>
        <img src={vector} alt="" />
        <h5>{text}</h5>
        <img src={arrow} alt="" id="arrow" />
      </button>
    </Link>
  );
};

export default Button;
