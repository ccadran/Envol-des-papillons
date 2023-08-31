import React from "react";
import RepasCard from "./RepasCard";

const RepasInfos = () => {
  return (
    <section className="repas">
      <h3>Les repas</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium
        recusandae doloribus eveniet ipsa libero tempora voluptatem impedit
        vitae corrupti!
      </p>
      <article className="repas-container">
        <RepasCard
          title="La lunch box"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.ti sociosq"
        />
        <RepasCard
          title="Le traiteur"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.ti sociosq"
        />
      </article>
    </section>
  );
};

export default RepasInfos;
