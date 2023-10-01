import React from "react";
import SingleCaroussel from "../../../shared/SingleCaroussel";

const Professeurs = ({ text, images }) => {
  return (
    <section className="professeurs">
      <h3>Des professeurs impliqués</h3>
      <div className="professeurs-container">
        <p>
          Les professeurs exerçant dans notre établissement sont pour certains
          professeurs dans d’autres collèges ou lycées de l’agglomération
          bordelaise, ou venant d’autres horizons. Ils suivent les préceptes de
          notre établissement, notamment en donnant <span>peu de devoirs</span>{" "}
          et en <span>évaluant de façon épisodique et respectueuse</span>.
          <br />
          <br />
          Ils font cours <span>à tous les niveaux</span>, ce qui leur permet de
          suivre au plus près les élèves et de bien les connaître.
        </p>
      </div>
    </section>
  );
};

export default Professeurs;
