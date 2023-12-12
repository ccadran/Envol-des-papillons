import React from "react";
import ClasseSchoolPedagogie from "./ClasseSchoolPedagogie";

const ClassesSchoolPedagogie = () => {
  return (
    <section className="classes">
      <h3>Nos classes</h3>
      <div className="classes-container">
        <ClasseSchoolPedagogie
          classe="3-6 ans"
          teachers={`Solène BELLEC
Caroline TISSERAND
Sandrine DUBUS`}
        />
        <ClasseSchoolPedagogie
          classe="6-8 ans"
          teachers={`Sabine MERLATEAU
          Claire ENGEL`}
        />
        <ClasseSchoolPedagogie
          classe="8-11 ans"
          teachers={`Sibylle YARHI
          Séverine CHEVALIER`}
        />
      </div>
    </section>
  );
};

export default ClassesSchoolPedagogie;
