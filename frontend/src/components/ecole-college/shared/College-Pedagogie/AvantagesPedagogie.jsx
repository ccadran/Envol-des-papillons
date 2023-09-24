import React from "react";
import AvantagePedagogie from "./AvantagePedagogie";

const AvantagesPedagogie = () => {
  return (
    <section className="avantages">
      <h3>Les avantages de la pédagogie</h3>
      <article className="avantages-container">
        <AvantagePedagogie
          title="Autonomie"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        />
        <AvantagePedagogie
          title="Ce'ntré sur l'enfant"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        />
        <AvantagePedagogie
          title="Inclusif"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        />
        <AvantagePedagogie
          title="Pédagogique"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        />
      </article>
    </section>
  );
};

export default AvantagesPedagogie;
