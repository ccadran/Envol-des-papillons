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
        Si les enfants mangent sur place, vous avez le choix entre (quelle que
        soit la formule choisie, votre enfant doit venir tous les jours avec une
        assiette et des couverts que vous récupérez le soir pour les laver) :
      </p>
      <article className="repas-container">
        <RepasCard
          title="La lunch box"
          text="Votre enfant apporte chaque jour son repas dans une boite hermétique maintenant au chaud ( réchauffage possible sur place)"
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
