import React from "react";
import SingleCaroussel from "../../../shared/SingleCaroussel";

const Materials = ({ text, images }) => {
  return (
    <section className="materials">
      <h3>Un matériel adapté</h3>
      <div className="materials-container">
        <p>
          Le collège alternatif l’Envol a trouvé sa place dans un local
          parfaitement situé au cœur du quartier des Chartrons à Bordeaux (109
          bis cours du Médoc),{" "}
          <span>facilement accessible en tram ou en bus.</span> <br />
          <br /> Pour plus de confort, les collégiens peuvent y laisser le
          matériel qu’il n’est pas absolument nécessaire de rapporter à la
          maison. <br />
          <br /> Un petit espace extérieur leur permet de s’aérer en toute
          sécurité mais de nombreuses sorties sont organisées pour leur
          permettre de bouger, découvrir et changer d’air ! Le collège est leur
          refuge, mais les élèves ne sont pas limités à cet espace.{" "}
          <span>
            Bordeaux est aussi un magnifique terrain d’apprentissage !
          </span>
        </p>
        <div className="caroussel-container">
          <SingleCaroussel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Materials;
