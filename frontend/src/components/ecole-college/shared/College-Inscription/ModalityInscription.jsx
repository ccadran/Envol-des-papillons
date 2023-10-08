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
          3. Il vous sera ensuite demandé si vous <span>confirmez</span> votre
          préinscription.
        </li>
        <li>
          4. Un <span>essai de 2 jours minimum</span> est à effectuer avant
          toute inscription définitive : cet essai sert autant à l’enfant qu’à
          l’équipe pédagogique. Nous vous dirons ensuite si nous pouvons
          accueillir votre enfant.
        </li>
        <li>
          5. Dès la confirmation d’une place pour votre enfant, vous devrez{" "}
          <span>vous acquitter des frais d’inscription</span> (200€) permettant
          de bloquer définitivement la place, et ensuite remettre le{" "}
          <span>dossier d’inscription</span> complet début juin.
        </li>
      </ol>
    </section>
  );
};

export default ModalityInscription;
