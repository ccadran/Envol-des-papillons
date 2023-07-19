import React from "react";
import Etablissement from "./Etablissement";

const Etablissements = () => {
  return (
    <section className="etablissements">
      <h3>Nos établissements</h3>
      <div className="etablissements-container">
        <Etablissement
          title="École"
          text="Per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac sceleris nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
"
          color="orange"
          link="/ecole/presentation"
        />
        <Etablissement
          title="Collège"
          text="Per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac sceleris nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
"
          color="blue"
          link="/college/presentation"
        />
      </div>
    </section>
  );
};

export default Etablissements;
