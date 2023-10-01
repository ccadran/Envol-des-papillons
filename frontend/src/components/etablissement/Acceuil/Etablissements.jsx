import React from "react";
import EtablissementSchool from "./EtablissementSchool";
import EtablissementCollege from "./EtablissementCollege";

const Etablissements = () => {
  return (
    <section className="etablissements">
      <h3>Nos établissements</h3>
      <article className="etablissements-container">
        <EtablissementSchool
          title="École"
          color="orange"
          link="/ecole/presentation"
        />
        <EtablissementCollege
          title="Collège"
          text="L’école L’envol des papillons, présente depuis plus de 10 ans à Bordeaux dans le quartier des Chartrons, accueille vos enfants de 3 à 12 ans. L’ensemble de l’équipe, formée à la pédagogie Montessori, accompagne vos enfants avec bienveillance et apporte le cadre nécessaire à l’épanouissement de vos enfants.
"
          color="blue"
          link="/college/presentation"
        />
      </article>
    </section>
  );
};

export default Etablissements;
