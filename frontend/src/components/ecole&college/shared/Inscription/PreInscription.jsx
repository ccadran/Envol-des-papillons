import React from "react";
import Button from "../../../shared/Button";
import FormPreInscription from "./FormPreInscription";
const PreInscription = () => {
  return (
    <section className="pre-inscription">
      <h3>Pré-inscription</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
        temporibus fugiat nemo labore debitis a fuga, aliquam possimus,
        delectus, deserunt sit iste animi quisquam perferendis earum ad sequi
        libero eum.
      </p>
      <div className="download">
        <h4>Replissez ou téléchargez</h4>
        <div className="buttons">
          <Button color="orange" text="Fiche pré-inscription 3-6ans" />
          <Button color="orange" text="Fiche pré-inscription 6-11ans" />
        </div>
      </div>
      <FormPreInscription />
    </section>
  );
};

export default PreInscription;
