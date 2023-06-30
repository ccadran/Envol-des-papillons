import React from "react";
import Tags from "./Tags";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Actuality = ({ actuality }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/admin/actualites";
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:5001/actuality/${postId}`);
      console.log(`Article ${postId} supprimé avec succès.`);
      window.location.reload();
    } catch (error) {
      console.log(
        "Une erreur s'est produite lors de la suppression de l'article :",
        error
      );
    }
  };

  return (
    <>
      {isRootPath && (
        <div className="admin-params">
          <Link to={`/admin/actualites/${actuality._id}`}>modifier</Link>
          <Link onClick={() => handleDelete(actuality._id)}>Supprimer</Link>
        </div>
      )}
      <Link to={`/parents/actualites/${actuality._id}`}>
        <div className="actuality">
          <div className="actuality-info">
            <h4>{actuality.title}</h4>
            <p>{actuality.accroche}</p>
            <Tags />
          </div>
          <div className="actuality-img">
            <img src="" alt="image principal actualité" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Actuality;
