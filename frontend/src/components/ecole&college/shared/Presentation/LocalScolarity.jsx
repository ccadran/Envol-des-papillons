import React from "react";
import Slider from "../../../shared/Slider";
import Button from "../../../shared/Button";

const LocalScolarity = ({ text, images }) => {
  const imageElements = images.map((image, index) => (
    <img key={index} src={image} alt={`Image ${index + 1}`} />
  ));
  return (
    <section className="local">
      <h3>Un local au coeur de Bordeaux</h3>
      <div className="local-container">
        <p>{text}</p>
        <Slider />
      </div>
    </section>
  );
};

export default LocalScolarity;
