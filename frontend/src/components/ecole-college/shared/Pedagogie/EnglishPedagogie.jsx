import React from "react";

const EnglishPedagogie = ({ text, image }) => {
  const containerStyle = {
    whiteSpace: "pre-line", // Cette ligne permet de conserver les sauts de ligne
  };

  return (
    <section className="english">
      <h3>L'importance de l'anglais</h3>
      <div className="english-container" style={containerStyle}>
        <p>
          L’anglais est pratiqué <span> deux demi-journées par semaine</span>,
          avec une personne ne parlant qu’en anglais aux enfants, offrant ainsi
          une immersion importante.
          <br />
          <br />
          Le matériel utilisé pour développer le vocabulaire des enfants est
          laissé à leur disposition, leur permettant de retravailler ce qui a
          été vu.
        </p>
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
