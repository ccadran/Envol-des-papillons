import React from "react";
import SingleCaroussel from "../../../shared/SingleCaroussel";
import Button from "../../../shared/Button";
// import "styles/ecole-college/Presentation/_local.scss";

const LocalScolarity = ({ text, images }) => {
  return (
    <section className="local" id="local">
      <h3>Un local au cœur de Bordeaux</h3>
      <div className="local-container">
        <p>
          L’école est située dans le quartier des Chartrons à Bordeaux (125
          cours Journu Auber), à 15’ du centre de Bordeaux,{" "}
          <span>facilement accessible en tram</span> (ligne C – Arrêt Grand
          Parc) ou en bus (liane 5). <br />
          <br />
          Les <span>classes</span>, très lumineuses, sont équipées de tout le{" "}
          <span>matériel Montessori</span>, accessible aux élèves pour
          manipuler, apprendre, découvrir… <br />
          <br />
          Un <span>petit parc </span>(parc de la Grenouillère) à proximité de
          l’école leur permet de s’aérer en toute sécurité, ainsi que le Jardin
          public, et de nombreuses sorties sont organisées pour leur permettre
          de bouger, découvrir et changer d’air ! Les élèves ne sont pas limités
          à cet espace.
        </p>
        <div className="caroussel-container">
          <SingleCaroussel images={images} />
        </div>
      </div>
    </section>
  );
};

export default LocalScolarity;
