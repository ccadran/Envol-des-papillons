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
        Quelle que soit la formule choisie, votre enfant doit venir tous les
        jours avec une assiette et des couverts que vous récupérez le soir pour
        les laver.
        <br />
        <br />
        Les familles ont le choix entre :
      </p>
      <article className="repas-container">
        <RepasCard
          title="La lunch box"
          text="Votre enfant apporte chaque jour son repas dans une boite hermétique maintenant au chaud (pas de réchauffage sur place)"
        />
        <RepasCardTraiteur title="Le traiteur" />
      </article>
      <article className="traiteur-more-info">
        <h4>En savoir plus sur le traiteur</h4>
        <p>
          Le repas comprend une entrée, un plat (avec féculents, légumes et
          viande ou poisson), un produit laitier et un dessert fruité (fruit ou
          compote). Un repas par semaine est végétarien. Vous pouvez aussi
          prendre des repas végétariens tous les jours. Le tarif est de 6€ par
          repas. Nous vous proposons de mensualiser le coût sur 10 mois, ce qui
          revient à 83€/mois.
        </p>
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
