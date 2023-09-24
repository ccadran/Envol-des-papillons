import React from "react";

export default function Periscolaire() {
  return (
    <section className="periscolaire">
      <h3>Périscolaire (Mercredi)</h3>
      <p>
        L’école propose aux enfants de l’école un temps d’accueil ludique le
        mercredi hors vacances scolaires, de 8h30 à 18h00. <br />
        <br />
        Prix : 35€ la journée, goûter compris <br />
        <br />
        Possibilité de demi-journées pour les 3-6 ans (20€ la demi-journée),
        jusqu’à 12h45 maximum.
      </p>
      <div className="periscolaire-container">
        <div className="periscolaire-schedule children">
          <h5>Déroulé de la journée : </h5>
          <ul>
            <li>- 8h30 - 9h30 : Accueil libre</li>
            <li>- 9h30 – 12h00 : activités</li>
            <li>- 12h00 – 14h00 : temps du midi (repas et temps calme)</li>
            <li>- 14h00 – 17h00 : activités et goûter</li>
            <li>- 17h00 – 18h00 : départ</li>
          </ul>
        </div>
        <div className="persicolaire-activity children">
          <h5>Activités proposées : </h5>
          <ul>
            <li>- Activités artistiques</li>
            <li>- Grands jeux ou activités sportives (6-11 ans)</li>
            <li>
              - Cuisine (préparation du goûter en alternance par les 3-6 ans et
              les 6-11 ans)
            </li>
            <li>- Sorties, visites</li>
            <li>- Autres</li>
          </ul>
        </div>
        <div className="periscolaire-lunch-break children">
          <h5>Temps du midi (12h00 - 14h00) : </h5>
          <p>
            Le repas est apporté par les familles (peut-être possibilité de
            traiteur ultérieurement), suivi d’un moment de repos ou de sieste
            pour ceux qui le souhaitent.
          </p>
        </div>
      </div>
    </section>
  );
}