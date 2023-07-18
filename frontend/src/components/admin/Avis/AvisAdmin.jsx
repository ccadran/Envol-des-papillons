import React from "react";
import PapillonLogo from "../../shared/PapillonLogo";
import { Link } from "react-router-dom";
import axios from "axios";

const AvisAdmin = ({ avis }) => {
  const dateFormated = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };
  const deleteAvis = () => {
    axios.delete("http://localhost:5001/avis/" + avis._id);
    console.log("avis supprimé");
    window.location.reload();
  };

  return (
    <div className="avis-card-admin">
      <div className="avis-header">
        <div className="author">
          <PapillonLogo />
          <div className="author-info">
            <h5>
              {avis.prenom} {avis.nom}
            </h5>
            <p>{dateFormated(avis.createdAt)}</p>
          </div>
        </div>
        <a className="fa-sharp fa-solid fa-trash" onClick={deleteAvis}></a>
      </div>
      <div className="avis-content">
        <p>{avis.avis}</p>
      </div>
    </div>
  );
};

export default AvisAdmin;
