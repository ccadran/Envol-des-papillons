import React from "react";
import RepasCard from "../InfosPratiques/RepasCard";
import RepasCardTraiteur from "../InfosPratiques/RepasCardTraiteur";
import { useLocation } from "react-router-dom";

const RepasInfos = () => {
  const location = useLocation();

  return (
    <section className="repas">
      <h3>Les repas</h3>
      <p>
        Le midi, les élèves peuvent sortir pendant 20 minutes pour s'acheter à
        manger et revenir déjeuner au collège. Ils peuvent également manger à
        l'éxtérieur et revenir pour le début des cours.
        <br />
        <br />
        Pour les enfants déjeunant sur place, ils doivent venir avec une
        assiette et des couverts. :
      </p>
      <article className="repas-container">
        <RepasCard
          title="La lunch box"
          text="Votre enfant apporte chaque jour son repas dans une boite hermétique maintenant au chaud ( réchauffage possible sur place)"
        />
      </article>

      <article className="collation">
        <h4>La collation du matin</h4>
        <p>
          Les enfants peuvent apporter une petite collation à base de fruit
          et/ou fruits secs (pas de produit trop sucré) qu’ils prennent dans la
          matinée
        </p>
      </article>
    </section>
  );
};

export default RepasInfos;
