import React from "react";
import Button from "../../../shared/Button";
import FormPreInscription from "./FormPreInscription";
const PreInscription = () => {
  return (
    <section className="pre-inscription">
      <h2>Pré-inscription</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
        temporibus fugiat nemo labore debitis a fuga, aliquam possimus,
        delectus, deserunt sit iste animi quisquam perferendis earum ad sequi
        libero eum.
      </p>
      <div className="download">
        <Button color="orange" text="Fiche pré-inscription 3-6ans" />
        <Button color="orange" text="Fiche pré-inscription 6-11ans" />
      </div>
      <FormPreInscription />
    </section>
  );
};

export default PreInscription;
