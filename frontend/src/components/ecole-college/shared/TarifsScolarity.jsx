import React from "react";
import TarifElement from "./TarifElement";
import Button from "../../shared/Button";
import "styles/ecole-college/shared/_tarifs.scss";
const TarifsScolarity = ({
  text,
  scolarity,
  inscription,
  association,
  etablissement,
}) => {
  const link = `/${etablissement}/inscription`;
  return (
    <section className="tarifs">
      <h3>Les infos sur les tarifs</h3>
      <p>{text}</p>
      <article className="tarifs-container">
        <TarifElement title=" Frais de scolarité " price={scolarity} />
        <TarifElement title="Frais d'inscription " price={inscription} />
        <TarifElement title="Adhésion association" price={association} />
      </article>
      <div className="non-include-fees">
        <ul>
          <li>
            <span>• Les sorties scolaires :</span> 20€/an
          </li>
          <li>
            {" "}
            <span>
              • Les activités sportives payantes (gym, natation, patinoire) :
            </span>{" "}
            environ 45€ sur factures
          </li>
          <li>
            <span>• Les consommables :</span> 15€ en 3-6 ans et 10€ en
            élémentaire
          </li>
          <li>
            <span>• Les fournitures scolaires en 6-11 ans :</span> 25€/an
          </li>
        </ul>
      </div>
      <article className="modality">
        <h4>Modalités de paiement</h4>
        <p>
          Vous pouvez régler les frais de scolarité en plusieurs fois (jusqu’à
          10 fois) par virement le 5 du mois ou par chèque à l’ordre de «
          Apprendre avec Montessori aujourd’hui ». Tous les chèques doivent être
          remis en septembre et seront encaissés autour du 5 du mois. Les autres
          frais sont dus en septembre, ou étalés sur 2 mois si besoin, sauf le
          sport.
        </p>
        <p>
          Voici le RIB de l'association: <span>RIBBBBB</span>
        </p>
        {window.location.pathname.includes("infos-pratiques") && (
          <Button text="J'inscris mon enfant" color="orange" link={link} />
        )}
      </article>
    </section>
  );
};

export default TarifsScolarity;
