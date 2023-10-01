import React, { useState, useEffect } from "react";
import Button from "../../../shared/Button";

const RepasCard = ({ title, text }) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (title === "Le traiteur") {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, [title]);

  return (
    <article className="repas-card">
      <h4>{title}</h4>
      <p>
        {" "}
        Nous fonctionnons avec un traiteur spécialisé dans les repas pour
        enfants, <a href="">«Papilles de petits»</a> qui fournit des repas
        équilibrés, frais et variés chaque jour, avec une formule végétarienne
        possible.
      </p>
      {!isHidden && <Button text="Le menus de Juin" color="orange" />}
    </article>
  );
};

export default RepasCard;
