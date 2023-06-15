import React from "react";
import TarifElement from "./TarifElement";
import Button from "../../shared/Button";
const TarifsScolarity = () => {
  return (
    <div>
      <h1>Les infos sur les tarifs</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id a fuga
        autem? Eos saepe corrupti sint architecto ab pariatur a dolores quas
        velit aperiam, doloribus, magnam esse rem facilis quisquam.
      </p>
      <div className="tarifs-container">
        <TarifElement />
        <TarifElement />
        <TarifElement />
      </div>
      <div className="modality">
        <h4>Modalités de paiement</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, atque
          sequi? Sapiente nulla atque reprehenderit veniam amet veritatis quos
          provident.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default TarifsScolarity;
