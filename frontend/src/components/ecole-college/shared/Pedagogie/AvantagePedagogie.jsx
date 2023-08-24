import React from "react";

const AvantagePedagogie = ({ title, text }) => {
  return (
    <div className="avantage-card">
      <h4>{title}</h4>
      <p> {text}</p>
    </div>
  );
};

export default AvantagePedagogie;
