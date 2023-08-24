import React from "react";

const EnglishPedagogie = ({ text, image }) => {
  return (
    <section className="english">
      <h3>L'importance de l'anglais</h3>
      <div className="english-container">
        <p>{text}</p>
        <div className="img-container">
          <img src={image} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default EnglishPedagogie;
