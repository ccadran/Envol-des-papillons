import React from "react";

const GarderieCollegePedagogie = () => {
  return (
    <section className="garderie">
      <h3>La garderie</h3>
      <p>
        Il n’y a pas de garderie au collège, mais votre enfant peut être
        accompagné à l’école pour bénéficier de l’accueil périscolaire du soir
        jusqu’à 18h15.
      </p>
      <div className="garderie-college-container">
        <article className="garderie-element">
          <p>En voici les tarifs :</p>
          <ul>
            <li>
              - jusqu’à 17h15 : <span>1€50</span>
            </li>
            <li>
              - jusqu’à 17h45 : <span>3€00</span>{" "}
            </li>
            <li>
              - jusqu’à 18h15 : <span>4€50</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default GarderieCollegePedagogie;
