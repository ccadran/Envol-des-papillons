import React from "react";
import ClasseSchoolPedagogie from "./ClasseSchoolPedagogie";

const ClassesSchoolPedagogie = () => {
  return (
    <section className="classes">
      <h3>Nos classes</h3>
      <div className="classes-container">
        <ClasseSchoolPedagogie
          classe="3-6 ans"
          teachers={`Caroline TISSERAND
Sandrine DUBUS`}
        />
        <ClasseSchoolPedagogie
          classe="6-9 ans"
          teachers={`Sabine MERLATEAU
          Laurence CADRAN`}
        />
        <ClasseSchoolPedagogie
          classe="9-11 ans"
          teachers={`Sibylle YARHI
          Séverine CHEVALIER`}
        />
      </div>
    </section>
  );
};

export default ClassesSchoolPedagogie;
