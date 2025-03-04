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
              <h4>8h30-8h45 : Accueil</h4>
              <p>
                C’est le moment où l’on investit la classe, on se dit bonjour,
                on se retrouve…et on se met au travail. Afin de ne pas perturber
                la concentration des enfants débutant leur activité,{" "}
                <span>l’horaire d’arrivée ne doit pas excéder 8h45</span>.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-11h45 : Classe</h4>
              <p>
                Dans la matinée, il y a un temps de
                <span> regroupement</span> pour les rituels de date, météo…
                C’est un moment pour raconter les activités culturelles ou
                ludiques vécues en famille. C’est aussi un temps de chansons,
                comptines, lecture d’albums. Ce rituel est effectué{" "}
                <span>un jour/deux en anglais</span>. <br /> Par ailleurs, les
                enfants travaillent avec le
                <span> matériel Montessori</span> selon un temps de travail
                personnalisé en fonction de{" "}
                <span>l’évolution et du rythme de chacun</span>. L’enfant
                travaille seul, en petit groupe ou avec les éducatrices pour une
                présentation du matériel.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>12h-15h : Repas & parc</h4>
              <p>
                Les enfants déjeunent dans la classe avec leur repas ou celui du
                traiteur (
                <a href="/ecole/infos-pratiques">
                  en savoir + sur l’organisation des repas
                </a>
                ). Après le repas, la sieste est proposée aux plus jeunes,
                pendant que les autres élèves se rendent au parc de la
                Grenouillère ou au Jardin public pour un temps de jeux libres.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>15h-16h30 : Classe </h4>
              <p>
                Les élèves qui ont dormi vont jouer au parc de la Grenouillère.
                Pour les autres, retour à l’école pour une{" "}
                <span>reprise des activités </span>
                dans la classe. L’après-midi est consacré principalement aux
                <span>
                  {" "}
                  matières culturelles, aux arts plastiques et aux sports.
                </span>
                .
              </p>
            </article>
            <article className="schedule-moment">
              <h4>16h30-18h15 : Garderie</h4>
              <p>
                L'accueil périscolaire (
                <a href="/ecole/infos-pratiques">garderie</a>) s'effectue dans
                la salle du rdc. Si votre enfant reste à la garderie, il faut
                lui prévoir un goûter. Vous le récupérez à l’heure qui vous
                convient.
              </p>
            </article>
          </>
        );
      case "6-9":
        return (
          <>
            <article className="schedule-moment">
              <h4>8h30-8h45 : Accueil</h4>
              <p>
                C’est le moment où l’on investit la classe, on se dit bonjour,
                on se retrouve…et on se met au travail avec différents rituels.
                Afin de ne pas perturber la concentration des enfants débutant
                leur activité,
                <span> l’horaire d’arrivée ne doit pas excéder 8h45.</span>.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-12h : Classe</h4>
              <p>
                La matinée débute par un <span>temps de regroupement </span>de
                15-20’. Le matin, la concentration des enfants étant optimale,
                même si elle fluctue selon les heures, le travail est donc
                essentiellement consacré aux{" "}
                <span>matières dites fondamentales</span> (maths et français).
              </p>
            </article>
            <article className="schedule-moment">
              <h4>12h-14h45 : Classe & parc</h4>
              <p>
                Les enfants déjeunent dans la classe avec leur repas ou celui du
                traiteur (
                <a href="/ecole/infos-pratiques">
                  en savoir + sur l’organisation des repas
                </a>
                ). Ils partent ensuite en récréation.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>14h45-16h30 : Classe</h4>
              <p>
                Au retour de la récréation, un petit <span>temps calme</span>{" "}
                est le bienvenu avant de reprendre la classe. Les élèves sont
                ensuite répartis en <span>demi-groupes</span> et travaillent
                autour de matières telles que l’histoire, la géographie, la
                botanique, la zoologie. L’art plastique et le sport sont faits
                en groupe entier.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>16h30-18h15 : Garderie</h4>
              <p>
                L'accueil périscolaire (
                <a href="/ecole/infos-pratiques">garderie</a>) s'effectue dans
                la salle du premier étage. Si votre enfant reste à la garderie,
                il faut lui prévoir un goûter. Vous le récupérez à l’heure qui
                vous convient.
              </p>
            </article>
          </>
        );
      case "9-11":
        return (
          <>
            <article className="schedule-moment">
              <h4>8h30-8h45 : Accueil</h4>
              <p>
                C’est le moment où l’on investit la classe, on se dit bonjour,
                on se retrouve…et on se met au travail. Afin de ne pas perturber
                la concentration des enfants débutant leur activité,{" "}
                <span>l’horaire d’arrivée ne doit pas excéder 8h45</span>.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-12h : Classe</h4>
              <p>
                La matinée débute par{" "}
                <span>un temps de regroupement de 15-20’</span>. Le matin, la
                concentration des enfants est optimale, même si elle fluctue
                selon les heures, le travail est donc essentiellement consacré
                aux <span>matières dites fondamentales</span> (maths et
                français).
              </p>
            </article>
            <article className="schedule-moment">
              <h4>12h-15h : Repas & Classe</h4>
              <p>
                Les enfants déjeunent dans la classe avec leur repas ou celui du
                traiteur (
                <a href="/ecole/infos-pratiques">
                  en savoir + sur l’organisation des repas
                </a>
                ). Après le déjeuner, les enfants sont partagés en deux groupes
                pour aborder les programmes d’histoire, de géographie et de
                sciences ainsi que l’anglais 2 fois/semaine. Le sport et l’art
                plastique sont réalisés en groupe entier.
              </p>
            </article>
            <article className="schedule-moment">
              <h4>15h-16h45 : Parc</h4>
              <p>Fin des activités et sortie au parc.</p>
            </article>
            <article className="schedule-moment">
              <h4>16h45-18h15 : Garderie</h4>
              <p>
                L'accueil périscolaire (
                <a href="/ecole/infos-pratiques">garderie</a>) s'effectue dans
                la salle du premier étage. Si votre enfant reste à la garderie,
                il faut lui prévoir un goûter. Vous le récupérez à l’heure qui
                vous convient.
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
            3-6 ans
          </h4>
          <h4
            onClick={() => handleClick("6-9")}
            className={classe === "6-9" ? "classe active" : "classe"}
          >
            6-9 ans
          </h4>
          <h4
            onClick={() => handleClick("9-11")}
            className={classe === "9-11" ? "classe active" : "classe"}
          >
            9-11 ans
          </h4>
        </div>
        {renderAgenda()}{" "}
        {/* Appeler la fonction pour afficher l'agenda correspondant */}
      </article>
    </section>
  );
};

export default ScheduleScolarity;
