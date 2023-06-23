import React from "react";
// import Tags from "./Tags";
import { Link, useLocation } from "react-router-dom";
import Button from "../../shared/Button";

const BlogPost = ({ article }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/admin/blog";
  return (
    <>
      {isRootPath && (
        <div className="admin-params">
          <Link to={`/admin/blog/${article._id}/edit`}>
            <Button text="modifier" />{" "}
          </Link>
          <Link to={`/admin/blog/${article._id}/delete`}>
            <Button text="Supprimer" />
          </Link>
        </div>
      )}

      <Link to={`/blog/${article._id}`}>
        <div className="article">
          <div className="article-info">
            <h4>{article.title}</h4>
            <p>{article.accroche}</p>
            {/* <Tags /> */}
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
