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
          <h4>8h20: Ouvertire du collège</h4>
          <p>
            texte descriptif
            {/* C’est le moment où l’on investit la classe, on se dit bonjour, on se
            retrouve…et on se met au travail avec différents rituels. Afin de ne
            pas perturber la concentration des enfants débutant leur activité,
            l’horaire d’arrivée ne doit pas excéder 8h45. */}
          </p>
        </article>
        <article className="schedule-moment">
          <h4>8h30/9h - 12h30 : Classe</h4>
          <p>
            C’est le moment où l’on investit la classe, on se dit bonjour, on se
            retrouve…et on se met au travail avec différents rituels. Afin de ne
            pas perturber la concentration des enfants débutant leur activité,
            l’horaire d’arrivée ne doit pas excéder 8h45.
          </p>
        </article>
        <article className="schedule-moment">
          <h4>12h30-13h30 : Pause déjeuner </h4>
          <p>
            Les enfants déjeunent dans les classes avec leur repas ou celui du
            traiteur (en savoir + sur l’organisation des repas). Ils partent
            ensuite en récréation.
          </p>
        </article>
        <article className="schedule-moment">
          <h4>13h30 - 15h : Classe</h4>
          <p>
            Au retour de la récréation, un petit temps calme est le bienvenu
            avant de reprendre la classe. Les élèves sont ensuite répartis en
            demi-groupes et travaillent autour de matières telles que
            l’histoire, la géographie, la botanique, la zoologie. L’art
            plastique et le sport sont faits en groupe entier.
          </p>
        </article>
        <article className="schedule-moment">
          <h4>15h00 - 17h00 : Projets ou Sport</h4>
          <p>
            Au retour de la récréation, un petit temps calme est le bienvenu
            avant de reprendre la classe. Les élèves sont ensuite répartis en
            demi-groupes et travaillent autour de matières telles que
            l’histoire, la géographie, la botanique, la zoologie. L’art
            plastique et le sport sont faits en groupe entier.
          </p>
        </article>
      </article>
    </section>
  );
};

export default ScheduleScolarity;
