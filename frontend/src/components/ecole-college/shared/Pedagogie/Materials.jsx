import React from "react";
import SingleCaroussel from "../../../shared/SingleCaroussel";

const Materials = ({ text, images }) => {
  return (
    <section className="materials">
      <h3>Un matériel adapté</h3>
      <div className="materials-container">
        <p>
          Le matériel est propice au développement et à l’apprentissage de
          l’enfant par lui-même. Il repose sur des{" "}
          <span>valeurs fondamentales</span> : <br />
          <br /> • il isole la difficulté <br />
          <br /> • il est sensoriel <br />
          <br />• il est adapté à l’enfant <br />
          <br /> • il est autocorrectif <br />
          <br />• il est harmonieux <br />
          <br />
          On trouve dans les classes{" "}
          <span>différentes catégories de matériel</span> : vie pratique, vie
          sensorielle, langage, ou français, mathématiques, culture (géographie,
          musique, botanique et zoologie)
        </p>
        <div className="caroussel-container">
          <SingleCaroussel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Materials;
