import React from "react";
import Button from "../../shared/Button";
import PapillonLogo from "../../shared/PapillonLogo";

const Etablissement = ({ title, text, color, link }) => {
  return (
    <article className="etablissement-card">
      <PapillonLogo color="orange" />
      <h4>{title}</h4>
      <p>{text}</p>
      <Button color={color} text="Je découvre" link={link} />
    </article>
  );
};

export default Etablissement;
