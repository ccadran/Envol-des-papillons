import React from "react";
import Button from "../../../shared/Button";
import FormPreInscription from "./FormPreInscription";
import { useLocation } from "react-router-dom";
import FormPreInscriptionCollege from "../College-Inscription/FormPreInscriptionCollege";

const PreInscription = ({ text }) => {
  const location = useLocation();
  const isCollege = location.pathname.includes("college");

  return (
    <section className="pre-inscription">
      <h3>Pré-inscription</h3>
      <p>{text}</p>
      <div className="download">
        <h4>Replissez ou téléchargez</h4>
        {isCollege ? (
          <div className="buttons">
            <Button
              color="blue"
              text="Fiche pré-inscription 6e - 3e"
              link="https://lenvoldespapillons33.com/wp-content/uploads/2021/11/PreInscription_College.pdf"
              newTab="yes"
              isArrow="no"
            />
          </div>
        ) : (
          <div className="buttons">
            <Button
              color="orange"
              text="Fiche pré-inscription 3-6ans"
              link="https://lenvoldespapillons33.com/wp-content/uploads/2022/01/PreInscription_3-6ans.pdf"
              newTab="yes"
              isArrow="no"
            />
            <Button
              color="orange"
              text="Fiche pré-inscription 6-11ans"
              link="https://lenvoldespapillons33.com/wp-content/uploads/2022/01/PreInscription_6-8et8-11ans.pdf"
              newTab="yes"
              isArrow="no"
            />
          </div>
        )}
      </div>
      <h4>Formulaire de pré-inscription</h4>
      {isCollege ? <FormPreInscriptionCollege /> : <FormPreInscription />}
    </section>
  );
};

export default PreInscription;
