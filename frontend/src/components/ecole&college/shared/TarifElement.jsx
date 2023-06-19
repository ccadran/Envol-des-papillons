import React from "react";

const TarifElement = ({ title, price }) => {
  return (
    <div className="tarif-card">
      <h4>{title}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
        dignissimos id nulla eligendi ex aliquid vitae sapiente dolor
        reprehenderit dolore!
      </p>
      <h4>{price}</h4>
    </div>
  );
};

export default TarifElement;
