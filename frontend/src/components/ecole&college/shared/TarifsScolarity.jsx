import React from "react";
import TarifElement from "./TarifElement";
import Button from "../../shared/Button";
import "styles/ecole&college/shared/_tarifs.scss";
const TarifsScolarity = ({
  text,
  scolarity,
  inscription,
  association,
  etablissement,
}) => {
  const link = `/${etablissement}/inscription`;
  return (
    <section className="tarifs">
      <h3>Les infos sur les tarifs</h3>
      <p>{text}</p>
      <div className="tarifs-container">
        <TarifElement title=" Frais de scolarité " price={scolarity} />
        <TarifElement title="Frais d'inscription " price={inscription} />
        <TarifElement title="Adhésion association" price={association} />
      </div>
      <div className="modality">
        <h4>Modalités de paiement</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, atque
          sequi? Sapiente nulla atque reprehenderit veniam amet veritatis quos
          provident.
        </p>
        {window.location.pathname.includes("infos-pratiques") && (
          <Button text="J'inscris mon enfant" color="orange" link={link} />
        )}
      </div>
    </section>
  );
};

export default TarifsScolarity;
