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
      <p>{text}</p>
      {!isHidden && <Button text="Le menus de Juin" color="orange" />}
    </article>
  );
};

export default RepasCard;
