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
        <TarifElement
          title=" Frais de scolarité "
          price={scolarity}
          text="Les frais de scolarité doivent être réglés en début de mois. Les frais pour un 2ème enfant sont de 360€/mois."
        />
        <TarifElement
          title="Frais d'inscription "
          price={inscription}
          text="Ils sont dus à l’entrée en 3-6 ans puis à l’entrée en élémentaire. Une réduction s’applique au 2ème enfant.(-40€)
"
        />
        <TarifElement
          title="Adhésion + frais administratifs"
          price={association}
          text="Ces frais sont à régler chaque année au mois de septembre. Une réduction s’applique au 2ème enfant.(-40€)
          "
        />
      </article>
      <div className="non-include-fees">
        <h4>En supplément : </h4>
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
            élémentaire (mouchoirs, savons...)
          </li>
          <li>
            <span>• Les fournitures scolaires en 6-11 ans :</span> 35€/an
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
          sport (sur facture). <br />
          <br />
          En cas de défaut de paiement, nous vous demanderons de nous remettre
          les chèques des mensualités restantes à payer. <br />
          <br />
          Si vous deviez quitter l’école en cours d’année, un préavis de 2 mois
          est demandé. Tout mois commencé est dû.
        </p>
        <p>
          Voici le RIB de l'association:{" "}
          <span>FR76 1558 9335 4407 6444 6124 018</span> <br />
          <br />
          Ainsi que son BIC : <span>CMBRFR2BXXX</span>
        </p>
        {window.location.pathname.includes("infos-pratiques") && (
          <Button text="J'inscris mon enfant" color="orange" link={link} />
        )}
      </article>
    </section>
  );
};

export default TarifsScolarity;
