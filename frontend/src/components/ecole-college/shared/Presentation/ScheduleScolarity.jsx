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
              <p>Description de l'activité durant la période pour 3-6 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-11h45 : Classe</h4>
              <p>Description de l'activité durant la période pour 3-6 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>11h45-12h45 : Repas</h4>
              <p>Description de l'activité durant la période pour 3-6 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>12h45-15h : Repas ou sieste</h4>
              <p>Description de l'activité durant la période pour 3-6 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>15-16h30 : Classe ou parc</h4>
              <p>Description de l'activité durant la période pour 3-6 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>16h45-18h15 : Garderie</h4>
              <p>Description de l'activité durant la période pour 3-6 ans</p>
            </article>
          </>
        );
      case "6-8":
        return (
          <>
            <article className="schedule-moment">
              <h4>8h-8h30 : Garderie</h4>
              <p>Description de l'activité durant la période pour 6-8 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>8h30-8h45 : Accueil</h4>
              <p>Description de l'activité durant la période pour 6-8 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-12h : Classe</h4>
              <p>Description de l'activité durant la période pour 6-8 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>12h-13h : Repas</h4>
              <p>Description de l'activité durant la période pour 6-8 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>13h-15h : Parc</h4>
              <p>Description de l'activité durant la période pour 6-8 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>15h-16h30 : Classe</h4>
              <p>Description de l'activité durant la période pour 6-8 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>16h45-18h15 : Garderie</h4>
              <p>Description de l'activité durant la période pour 6-8 ans</p>
            </article>
          </>
        );
      case "8-11":
        return (
          <>
            <article className="schedule-moment">
              <h4>8h-8h30 : Garderie</h4>
              <p>Description de l'activité durant la période pour 8-11 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>8h30-8h45 : Accueil</h4>
              <p>Description de l'activité durant la période pour 8-11 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>8h45-12h : Classe</h4>
              <p>Description de l'activité durant la période pour 8-11 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>12h-13h : Repas</h4>
              <p>Description de l'activité durant la période pour 8-11 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>13h-15h : Classe</h4>
              <p>Description de l'activité durant la période pour 8-11 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>15h-16h45 : Parc</h4>
              <p>Description de l'activité durant la période pour 8-11 ans</p>
            </article>
            <article className="schedule-moment">
              <h4>16h45-18h15 : Garderie</h4>
              <p>Description de l'activité durant la période pour 8-11 ans</p>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero
        sequi ad rerum cupiditate iste ipsam hic delectus, ducimus quisquam
        aliquam odio officiis dolorum quis excepturi voluptates molestias iure
        nisi.
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
