import React from "react";

const EnglishPedagogie = ({ text }) => {
  return (
    <section className="english">
      <h3>L'importance de l'anglais</h3>
      <div className="english-container">
        <p>{text}</p>
        <img src={Image} alt="" />
      </div>
    </section>
  );
};

export default EnglishPedagogie;
