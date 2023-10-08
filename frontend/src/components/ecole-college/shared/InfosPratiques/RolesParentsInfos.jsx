import React from "react";
import RoleParentsInfos from "./RoleParentsInfos";
import { useLocation } from "react-router-dom";

const RolesParentsInfos = ({ text }) => {
  const location = useLocation();
  return (
    <section className="roles-parents">
      <h3>Le rôle des parents</h3>
      <p>
        L’ensemble scolaire alternatif « L’envol des papillons » est géré par
        une association loi 1901 à but non lucratif avec le statut d’école
        privée hors contrat. Être hors contrat signifie que nous ne bénéficions
        d’aucune subvention de l’État ou de toute autre collectivité. Aussi le
        fonctionnement ne dépend que des frais de scolarité réglés par les
        parents. Nous aspirons à proposer un coût le plus juste possible, c’est
        pourquoi nous demandons l’implication des parents dans l’école, qui peut
        prendre diverses formes :
      </p>
      <article className="roles-container">
        <RoleParentsInfos
          title="Les fêtes"
          text="Deux fêtes ont lieu chaque année : en décembre et en juin. Nous avons besoin de votre aide pour leur organisation, la tenue des stands de la kermesse, la recherche de lots pour la tombola, l’aide à l’installation …"
        />
        <RoleParentsInfos
          title="Nettoyage"
          text="  Nous demandons que chaque famille participe au nettoyage du matériel
pédagogique : ce temps a lieu le samedi matin de 9h à 12h (un par an
par enfant). Un planning est mis en place en début d’année pour que
vous puissiez vous inscrire à l’une des sessions de nettoyage (une
toutes les 6 semaines). "
        />
        <RoleParentsInfos
          title="Sortie scolaire"
          text="Les enseignantes sont susceptibles de vous solliciter pour accompagner les enfants lors des sorties scolaires ponctuelles. La demande sera faite par mail.
"
        />
      </article>
      {location.pathname.includes("ecole") && (
        <div className="role-obligatoire">
          <h4>Obligatoire : </h4>
          <p>
            Si une famille ne peut pas participer au temps de nettoyage (ou ne
            veut pas), nous souhaitons qu’elle fasse un don de 50€ à
            l’association que nous pourrons déduire d’une cotisation pour ceux
            qui le feraient plus souvent. Cette décision a été votée en
            assemblée générale.
          </p>
        </div>
      )}
    </section>
  );
};

export default RolesParentsInfos;
