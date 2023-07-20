import React from "react";
import SingleCaroussel from "../../../shared/SingleCaroussel";
import Button from "../../../shared/Button";
// import "styles/ecole&college/Presentation/_local.scss";

const LocalScolarity = ({ text, images }) => {
  return (
    <section className="local" id="local">
      <h3>Un local au coeur de Bordeaux</h3>
      <div className="local-container">
        <p>{text}</p>
        <div className="caroussel-container">
          <SingleCaroussel images={images} />
        </div>
      </div>
    </section>
  );
};

export default LocalScolarity;
