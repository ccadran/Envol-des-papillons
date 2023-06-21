import React from "react";
import Button from "../../shared/Button";

const ParentsContent = ({ section }) => {
  return (
    <section className={`content-${section}`}>
      <img src="" alt={`image des ${section}`} />
      <Button text="Télécharger" color="violet" />
    </section>
  );
};

export default ParentsContent;
