import React from "react";
import Button from "../../shared/Button";
import PapillonLogo from "../../shared/PapillonLogo";

const EtablissementCollege = ({ title, text, color, link }) => {
  return (
    <article className="etablissement-card">
      <PapillonLogo color="orange" />
      <h4>{title}</h4>
      <p>
        Le collège alternatif L’envol, ouvert depuis 2020, accueille vos élèves
        de la sixième à la troisième. Les classes comptent au maximum une
        douzaine d'élèves, permettant de les accompagner au mieux en fonction de
        leurs besoins.
      </p>
      <Button color={color} text="Je découvre" link={link} />
    </article>
  );
};

export default EtablissementCollege;
