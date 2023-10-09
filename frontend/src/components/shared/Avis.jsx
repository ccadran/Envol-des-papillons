import React, { useState, useEffect } from "react";
import logo from "../../assets/logos/papillon.svg";
import PapillonLogo from "./PapillonLogo";
import "styles/shared/_avisCards.scss";

const Avis = ({ avi }) => {
  const dateFormated = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };
  const [showFullText, setShowFullText] = useState(false); // État pour afficher ou masquer le texte complet de l'avis

  const toggleShowFullText = () => {
    setShowFullText((prevShowFullText) => !prevShowFullText); // Inverser l'état actuel
  };

  return (
    <article className="avis-card">
      <div className="avis-header">
        {avi.etablissement === "école" ? (
          <PapillonLogo color="orange" />
        ) : (
          <PapillonLogo color="blue" />
        )}
        <div className="avis-header-info">
          <h5>
            {avi.prenom} {avi.nom}
          </h5>
          <p>{dateFormated(avi.createdAt)}</p>
        </div>
      </div>
      <div className="avis-text">
        <p className={showFullText ? "full-text" : "excerpt-text"}>
          {avi.avis}
        </p>
      </div>
      <p id="show-more" onClick={toggleShowFullText}>
        {showFullText ? " Voir -" : "Voir +"}
      </p>
    </article>
  );
};

export default Avis;
