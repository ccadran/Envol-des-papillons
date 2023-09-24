import React from "react";

const EnglishPedagogie = ({ text, image }) => {
  const containerStyle = {
    whiteSpace: "pre-line", // Cette ligne permet de conserver les sauts de ligne
  };

  return (
    <section className="english">
      <h3>L'importance de l'anglais</h3>
      <div className="english-container" style={containerStyle}>
        <p>{text}</p>
        <div className="img-container">
          <img
            src={image}
            alt="illustration apprentissage de l'anglais"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EnglishPedagogie;
