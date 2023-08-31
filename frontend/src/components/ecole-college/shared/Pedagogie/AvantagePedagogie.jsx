import React from "react";

const AvantagePedagogie = ({ title, text }) => {
  return (
    <article className="avantage-card">
      <h4>{title}</h4>
      <p> {text}</p>
    </article>
  );
};

export default AvantagePedagogie;
