import React from "react";
import Slider from "../../../shared/Slider";

const Materials = ({ text, images }) => {
  return (
    <section className="materials">
      <h3>Un matériel adapté</h3>
      <div className="materials-container">
        <p>{text}</p>
        <Slider images={images} />
      </div>
    </section>
  );
};

export default Materials;
