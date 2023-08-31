import React from "react";
import Tags from "./Tags";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Actuality = ({ actuality }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/admin/actualites";
  const isSelected = true;
  const handleDelete = async (postId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/actuality/${postId}`
      );
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
      <div className="post">
        {isRootPath && (
          <div className="admin-params">
            <a
              href={`/admin/actualites/${actuality._id}`}
              className="fa-solid fa-pen"
            ></a>
            <a
              onClick={() => handleDelete(actuality._id)}
              className="fa-sharp fa-solid fa-trash"
            ></a>
          </div>
        )}
        <Link
          to={
            isRootPath
              ? `/admin/actualites/${actuality._id}`
              : `/parents/actualites/${actuality._id}`
          }
        >
          <article className="article">
            <div className="article-info">
              <h4>{actuality.title}</h4>
              <p>{actuality.accroche}</p>
              <Tags tags={actuality.tags} isSelected={isSelected} />
            </div>
            <div className="article-img">
              <img
                src={actuality.mainImg}
                alt="illustration principal actualité"
                loading="lazy"
              />
            </div>
          </article>
        </Link>
      </div>
    </>
  );
};

export default Actuality;
