import React, { useState } from "react";

const ScheduleScolarity = () => {
  return (
    <section className="schedule">
      <h3>La journée type</h3>
      <p>
        Dans la mesure du possible, les cours ne débutent qu’à 9h, répondant
        ainsi aux besoins des adolescents de dormir. <br />
        <br />
        L’essentiel des cours se fait le matin et en début d’après-midi (sauf le
        mardi), laissant les après-midis libres pour les projets (ateliers
        philo, exposés, conseil d’école, projets pluridisciplinaires,
        permaculture…), les activités artistiques, le sport et les sorties
        pédagogiques (ou autres propositions).
      </p>
      <article className="schedule-container">
        <div className="schedule-class">
          <h4>Journée Type : </h4>
        </div>
        <article className="schedule-moment">
          <h4>8h20: Ouverture du collège</h4>
          <p>
            Si vous avez besoin de déposer votre enfant avant, il peut se rendre
            à l’école L’envol des papillons toute proche à partir de 8h.
          </p>
        </article>
        <article className="schedule-moment">
          <h4>8h30/9h - 12h30 : Classe</h4>
          <p>
            Les élèves ont en moyenne 3 cours dans la matinée, avec une ou deux
            pauses.
          </p>
        </article>
        <article className="schedule-moment">
          <h4>12h30-13h30 : Pause déjeuner </h4>
          <p>
            Les élèves peuvent manger au collège (traiteur ou lunch box) ou
            peuvent sortir manger à l’extérieur. Le collège rouvre 10’ avant la
            reprise des cours.
          </p>
        </article>
        <article className="schedule-moment">
          <h4>13h30 - 15h : Classe</h4>
          <p>
            Le début d’après-midi, il y a essentiellement les cours de langues,
            et le vendredi ont lieu les cours d’art et d’histoire de l’art.
          </p>
        </article>
        <article className="schedule-moment">
          <h4>15h00 - 17h00 : Projets ou Sport</h4>
          <p>
            Les lundi et jeudi sont consacrés aux “projets” et sorties
            scolaires. Le vendredi après-midi est réservé au sport, avec des
            cycles de différents sports (athlétisme, patin à glace, sports
            collectifs…)
          </p>
        </article>
      </article>
    </section>
  );
};

export default ScheduleScolarity;
