import React from "react";
import RepasCard from "./RepasCard";

const RepasInfos = () => {
  return (
    <div>
      <h1>Les repas</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium
        recusandae doloribus eveniet ipsa libero tempora voluptatem impedit
        vitae corrupti!
      </p>
      <div className="repas-container">
        <RepasCard
          title="La lunch box"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.ti sociosq"
        />
        <RepasCard
          title="Le traiteur"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.ti sociosq"
        />
      </div>
    </div>
  );
};

export default RepasInfos;
