import React, { useState } from "react";

const ScheduleScolarity = () => {
  const [classe, setClasse] = useState("3-6");
  const handleClick = (selectedClasse) => {
    setClasse(selectedClasse);
  };

  const renderAgenda = () => {
    switch (classe) {
      case "3-6":
        return (
          <>
            <article className="schedule-moment">
              <h4>8h-8h30 : Garderie</h4>
              <p>Description de l'activité durant la période pour 3-6 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>8h30-8h45 : Accueil</h4>
              <p>
                C’est le moment où l’on investit la classe, on se dit bonjour,
                on se retrouve…et on se met au travail. Afin de ne pas perturber
                la concentration des enfants débutant leur activité, l’horaire
                d’arrivée ne doit pas excéder 8h45.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-11h45 : Classe</h4>
              <p>
                C’est le moment où l’on investit la classe, on se dit bonjour,
                on se retrouve…et on se met au travail. Afin de ne pas perturber
                la concentration des enfants débutant leur activité, l’horaire
                d’arrivée ne doit pas excéder 8h45.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>12h-15h : Repas & pause</h4>
              <p>
                Les enfants déjeunent dans la classe avec leur repas ou celui du
                traiteur (en savoir + sur l’organisation des repas) La sieste
                est proposée aux plus jeunes, pendant que les autres élèves se
                rendent au parc de la Grenouillère ou au Jardin public pour un
                temps de jeux libres.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>15h-16h30 : Classe & pause</h4>
              <p>
                Les élèves qui ont dormi vont jouer au parc de la Grenouillère.
                Pour les autres, retour à l’école pour une reprise des activités
                dans la classe. L’après-midi est consacré principalement aux
                matières culturelles.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>16h30-18h15 : Classe ou parc</h4>
              <p>
                Accueil périscolaire (garderie) dans la salle du rdc. Si votre
                enfant reste à la garderie, il faut lui prévoir un goûter. Vous
                le récupérez à l’heure qui vous convient.
              </p>
            </article>
          </>
        );
      case "6-8":
        return (
          <>
            <article className="schedule-moment">
              <h4>8h30-8h45 : Accueil</h4>
              <p>
                C’est le moment où l’on investit la classe, on se dit bonjour,
                on se retrouve…et on se met au travail avec différents rituels.
                Afin de ne pas perturber la concentration des enfants débutant
                leur activité, l’horaire d’arrivée ne doit pas excéder 8h45.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-11h45 : Classe</h4>
              <p>
                La matinée débute par un temps de regroupement de 15-20’. Le
                matin, la concentration des enfants étant optimale, même si elle
                fluctue selon les heures, le travail est donc essentiellement
                consacré aux matières dites fondamentales (maths et français).
              </p>
            </article>
            <article className="schedule-moment">
              <h4>12h-14h45 : Classe & parc</h4>
              <p>
                Les enfants déjeunent dans les classes avec leur repas ou celui
                du traiteur (en savoir + sur l’organisation des repas). Ils
                partent ensuite en récréation.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>14h45-16h30 : Classe</h4>
              <p>
                Au retour de la récréation, un petit temps calme est le bienvenu
                avant de reprendre la classe. Les élèves sont ensuite répartis
                en demi-groupes et travaillent autour de matières telles que
                l’histoire, la géographie, la botanique, la zoologie. L’art
                plastique et le sport sont faits en groupe entier.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>16h30-18h15 : Garderie</h4>
              <p>
                Au retour de la récréation, un petit temps calme est le bienvenu
                avant de reprendre la classe. Les élèves sont ensuite répartis
                en demi-groupes et travaillent autour de matières telles que
                l’histoire, la géographie, la botanique, la zoologie. L’art
                plastique et le sport sont faits en groupe entier.
              </p>
            </article>
          </>
        );
      case "8-11":
        return (
          <>
            <article className="schedule-moment">
              <h4>8h30-8h45 : Garderie</h4>
              <p>
                C’est le moment où l’on investit la classe, on se dit bonjour,
                on se retrouve…et on se met au travail avec différents rituels.
                Afin de ne pas perturber la concentration des enfants débutant
                leur activité, l’horaire d’arrivée ne doit pas excéder 8h45.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-11h45 : Classe</h4>
              <p>
                C’est le moment où l’on investit la classe, on se dit bonjour,
                on se retrouve…et on se met au travail avec différents rituels.
                Afin de ne pas perturber la concentration des enfants débutant
                leur activité, l’horaire d’arrivée ne doit pas excéder 8h45.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>12h-14h45 : Repas & Parc</h4>
              <p>
                Les enfants déjeunent dans les classes avec leur repas ou celui
                du traiteur (en savoir + sur l’organisation des repas). Ils
                partent ensuite en récréation.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>14h45-16h30 : Classe</h4>
              <p>
                Au retour de la récréation, un petit temps calme est le bienvenu
                avant de reprendre la classe. Les élèves sont ensuite répartis
                en demi-groupes et travaillent autour de matières telles que
                l’histoire, la géographie, la botanique, la zoologie. L’art
                plastique et le sport sont faits en groupe entier.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>16h30-18h15 : Garderie</h4>
              <p>
                Au retour de la récréation, un petit temps calme est le bienvenu
                avant de reprendre la classe. Les élèves sont ensuite répartis
                en demi-groupes et travaillent autour de matières telles que
                l’histoire, la géographie, la botanique, la zoologie. L’art
                plastique et le sport sont faits en groupe entier.
              </p>
            </article>
          </>
        );
      default:
        return null; // Aucun agenda par défaut si la classe n'est pas définie
    }
  };

  return (
    <section className="schedule">
      <h3>La journée type</h3>
      <p>
        L’école accueille les enfants de 8h30 à 16h30 les lundi, mardi, jeudi et
        vendredi. Une garderie est proposée à partir de 8h le matin, et le soir
        jusqu’à 18h15.
      </p>
      <article className="schedule-container">
        <div className="schedule-class">
          <h4
            onClick={() => handleClick("3-6")}
            className={classe === "3-6" ? "classe active" : "classe"}
          >
            3-6ans
          </h4>
          <h4
            onClick={() => handleClick("6-8")}
            className={classe === "6-8" ? "classe active" : "classe"}
          >
            6-8ans
          </h4>
          <h4
            onClick={() => handleClick("8-11")}
            className={classe === "8-11" ? "classe active" : "classe"}
          >
            8-11ans
          </h4>
        </div>
        {renderAgenda()}{" "}
        {/* Appeler la fonction pour afficher l'agenda correspondant */}
      </article>
    </section>
  );
};

export default ScheduleScolarity;
