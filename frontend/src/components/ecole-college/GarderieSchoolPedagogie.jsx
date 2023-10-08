import React from "react";

const GarderieSchoolPedagogie = () => {
  return (
    <section className="garderie">
      <h3>La garderie</h3>
      <p>
        L’école propose une garderie le matin de 8h à 8h30 et le soir jusqu'à
        18h15. Les enfants profitent d’un temps de jeux libres (société, cartes)
        et peuvent apporter de petits jouets personnels.
      </p>
      <div className="garderie-container">
        <article className="garderie-element">
          <h4>Le matin</h4>
          <p>
            Le matin, le tarif est de 1€, quelle que soit l’heure d’arrivée.
          </p>
        </article>
        <article className="garderie-element">
          <h4>Le soir</h4>
          <p>
            Après un goûter fourni par les parents, les enfants se rendent dans
            les salles dédiées à leur âge. Vous les récupérez à l’heure que vous
            souhaitez. <br />
            <br />
            <span>Voici les tarifs proposés:</span>
            <br />
            <br />
            jusqu’à 17h15 : 1€50
            <br />
            <br />
            jusqu’à 17h45 : 3€
            <br />
            <br />
            jusqu’à 18h15 : 4€50
          </p>
        </article>
        <article className="garderie-element">
          <h4>Modalité de facturation</h4>
          <p>
            La facturation se fait au prorata des heures effectuées. Vous
            recevrez une facture en fin de période, au moment des vacances
            scolaires.
          </p>
        </article>
      </div>
    </section>
  );
};

export default GarderieSchoolPedagogie;
