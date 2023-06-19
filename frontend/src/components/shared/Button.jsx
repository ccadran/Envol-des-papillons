import React from "react";

const Button = ({ color, text }) => {
  let backgroundColor;

  if (color === "orange") {
    backgroundColor = "#F37A6A";
  } else if (color === "blue") {
    backgroundColor = "#5EC3B5";
  } else if (color === "violet") {
    backgroundColor = "#853894";
  }

  return (
    <div>
      <h4 style={{ background: backgroundColor }}>{text}</h4>
    </div>
  );
};

export default Button;
