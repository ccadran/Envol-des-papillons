import React from "react";
import AvantagePedagogie from "./AvantagePedagogie";

const AvantagesPedagogie = () => {
  return (
    <section className="avantages">
      <h3>Les avantages de la pédagogie</h3>
      <article className="avantages-container">
        <AvantagePedagogie
          title="Autonomie"
          text="Le matériel pédagogique Montessori est en grande partie auto-correctif, favorisant l’autonomie des enfants. Le matériel de vie pratique leur permet de s’exercer aux gestes de la vie quotidienne. 
          "
        />
        <AvantagePedagogie
          title="Centré sur l'enfant"
          text="Tout est mis en place pour permettre l’épanouissement des enfants. Le matériel est à leur hauteur, disponible et attrayant. Les enfants sont libres de circuler dans la classe, d’observer ce que font les autres, à partir du moment où ils ne dérangent pas le travail des autres enfants."
        />
        <AvantagePedagogie
          title="Inclusif"
          text="L’école accueille des enfants ayant des difficultés scolaires ou en situation de handicap lorsque nous pensons que cela relève de nos compétences. Le fonctionnement d’une classe Montessori peut leur permettre de s’épanouir. "
        />
      </article>
    </section>
  );
};

export default AvantagesPedagogie;
