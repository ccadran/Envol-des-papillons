import React from "react";

const ModalityInscription = () => {
  return (
    <section className="inscription-modality">
      <h3>Les modalités d'inscriptions</h3>
      <h4>L'inscription se fait en plusieurs étapes : </h4>
      <ol>
        <li>
          1. Dès que possible, retournez le{" "}
          <span>formulaire de préinscription en ligne.</span> Vous recevrez un
          mail vous confirmant la bonne réception du formulaire.
        </li>
        <li>
          2. Vous serez conviés à un <span>entretien</span> avec la directrice
          pour vous présenter l’école et son fonctionnement, mais aussi pour
          échanger sur vos motivations, et répondre à vos questions. Selon l’âge
          de l’enfant (+ de 6 ans), un essai peut être demandé.
        </li>
        <li>
          3. Il vous sera ensuite demandé (en janvier) si vous{" "}
          <span>confirmez</span> votre préinscription. Si oui, vous recevrez
          courant février une réponse pour vous indiquer si votre enfant a une
          place ou s’il est mis sur liste d’attente.{" "}
        </li>
        <li>
          4. Dès la confirmation d’une place pour votre enfant, vous devrez vous
          acquitter des frais d’inscription (200€) permettant de bloquer
          définitivement la place, et ensuite remettre le{" "}
          <span>dossier d’inscription</span> complet début juin.
        </li>
      </ol>
    </section>
  );
};

export default ModalityInscription;
