import React from "react";
import RoleParentsInfos from "./RoleParentsInfos";

const RolesParentsInfos = ({ text }) => {
  return (
    <section className="roles-parents">
      <h3>Le role des parents</h3>
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
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />
        <RoleParentsInfos
          title="Nettoyage"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />
        <RoleParentsInfos
          title="Sortie scolaire"
          text="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />
      </article>
      <div className="role-obligatoire">
        <h4>Obligatoire : </h4>
        <p>
          Nous demandons que chaque famille participe au nettoyage du matériel
          pédagogique : ce temps a lieu le samedi matin de 9h à 12h (un par an
          par enfant). Un planning est mis en place en début d’année pour que
          vous puissiez vous inscrire à l’une des sessions de nettoyage (une
          toutes les 6 semaines). <br />
          <br />
          Si une famille ne peut pas participer (ou ne veut pas), nous
          souhaitons qu’elle fasse un don de 50€ à l’association que nous
          pourrons déduire d’une cotisation pour ceux qui le feraient plus
          souvent. Cette décision a été votée en assemblée générale.
        </p>
      </div>
    </section>
  );
};

export default RolesParentsInfos;
