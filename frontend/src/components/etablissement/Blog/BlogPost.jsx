import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../shared/Button";
import axios from "axios";

const BlogPost = ({ article }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/admin/blog";

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:5001/blog/${postId}`);
      console.log(`Article ${postId} supprimé avec succès.`);
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
          <Button text="modifier" link={`/admin/blog/${article._id}`} />
          <Link onClick={() => handleDelete(article._id)}>Supprimer</Link>
        </div>
      )}

      <Link
        to={
          isRootPath
            ? `/admin/blog/${article._id}`
            : `/etablissement/blog/${article._id}`
        }
      >
        <div className="article">
          <div className="article-info">
            <h4>{article.title}</h4>
            <p>{article.accroche}</p>
          </div>
          <div className="article-img">
            <img src="" alt="image principal actualité" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogPost;
