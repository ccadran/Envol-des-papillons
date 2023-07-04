import React from "react";
import Slider from "../../../shared/Slider";
import Button from "../../../shared/Button";
// import "styles/ecole&college/Presentation/_local.scss";

const LocalScolarity = ({ text, images }) => {
  return (
    <section className="local">
      <h3>Un local au coeur de Bordeaux</h3>
      <div className="local-container">
        <p>{text}</p>
        <Slider images={images} />
      </div>
    </section>
  );
};

export default LocalScolarity;
