import React from "react";
import { Link } from "react-router-dom";

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
      <h4 style={{ background: backgroundColor }}>{text}</h4>
    </Link>
  );
};

export default Button;
