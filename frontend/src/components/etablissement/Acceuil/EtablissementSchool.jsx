import React from "react";
import Button from "../../shared/Button";
import PapillonLogo from "../../shared/PapillonLogo";

const EtablissementSchool = ({ title, text, color, link }) => {
  return (
    <article className="etablissement-card">
      <PapillonLogo color="orange" />
      <h4>{title}</h4>
      <p>
        L’école L’envol des papillons, présente depuis plus de 10 ans à Bordeaux
        dans le quartier des Chartrons, accueille vos enfants de 3 à 12 ans.{" "}
        <br /> L’ensemble de l’équipe, formée à la pédagogie Montessori,
        accompagne vos enfants avec bienveillance et apporte le cadre nécessaire
        à leur épanouissement de vos enfants.
      </p>
      <Button color={color} text="Je découvre" link={link} />
    </article>
  );
};

export default EtablissementSchool;
