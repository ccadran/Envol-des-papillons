import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../shared/Button";
import axios from "axios";
import Tags from "components/parents/Actualités/Tags";

const BlogPost = ({ article, selectedTags }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/admin/blog";
  const isSelected = true;

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:5001/blog/${postId}`);
      console.log(`Article ${postId} supprimé avec succès.`);
      window.location.reload();
    } catch (error) {
      console.log(
        "Une erreur s'est produite lors de la suppression de l'article :",
        error
      );
    }
  };

  const hasSelectedTags = article.tags.some((tag) =>
    selectedTags.includes(tag)
  );

  return (
    <>
      <div className="post">
        {isRootPath && (
          <div className="admin-params">
            <a
              href={`/admin/blog/${article._id}`}
              className="fa-solid fa-pen"
            ></a>
            <a
              onClick={() => handleDelete(article._id)}
              className="fa-sharp fa-solid fa-trash"
            ></a>
            {/* <Button text="modifier" link={`/admin/blog/${article._id}`} />
          <Link onClick={() => handleDelete(article._id)}>Supprimer</Link> */}
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
              <Tags tags={article.tags} isSelected={isSelected} />
            </div>
            <div className="article-img">
              <img src="" alt="image principal actualité" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogPost;
