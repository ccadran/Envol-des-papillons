import React from "react";
import RepasCard from "./RepasCard";
import RepasCardTraiteur from "./RepasCardTraiteur";

const RepasInfos = () => {
  return (
    <section className="repas">
      <h3>Les repas</h3>
      <p>
        Le repas est un moment qui fait partie intégrante de la vie de l’école
        et des apprentissages. Il est pris dans la classe.
        <br />
        <br />
        Votre enfant doit venir tous les jours avec une assiette et des couverts
        que vous récupérez le soir pour les laver.
      </p>
      <article className="repas-container">
        <RepasCard
          title="La lunch box"
          text="Votre enfant apporte chaque jour son repas dans une boite hermétique maintenant au chaud (pas de réchauffage sur place)"
        />
      </article>
      <article className="collation">
        <h4>La collation du matin</h4>
        <p>
          Les enfants apportent une petite collation à base de fruit et/ou
          fruits secs (pas de produit trop sucré) qu’ils prennent dans la
          matinée
        </p>
      </article>
    </section>
  );
};

export default RepasInfos;
