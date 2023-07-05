import React from "react";
import ClasseSchoolPedagogie from "./ClasseSchoolPedagogie";

const ClassesSchoolPedagogie = () => {
  return (
    <section className="classes">
      <h3>Nos classes</h3>
      <div className="classes-container">
        <ClasseSchoolPedagogie
          classe="3-6ans"
          teachers={`Micheline Vert
Patricia Dose
Thomas Taqueret
Lucie Deuil`}
        />
        <ClasseSchoolPedagogie
          classe="6-8ans"
          teachers={`Micheline Vert
Patricia Dose
Thomas Taqueret
Lucie Deuil`}
        />
        <ClasseSchoolPedagogie
          classe="8-11ans"
          teachers={`Micheline Vert 
Patricia Dose
Thomas Taqueret
Lucie Deuil`}
        />
      </div>
    </section>
  );
};

export default ClassesSchoolPedagogie;
