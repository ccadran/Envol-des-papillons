import React from "react";
import SingleCaroussel from "../../../shared/SingleCaroussel";

const Materials = ({ text, images }) => {
  return (
    <section className="materials">
      <h3>Un matériel adapté</h3>
      <div className="materials-container">
        <p>{text}</p>
        <div className="caroussel-container">
          <SingleCaroussel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Materials;
