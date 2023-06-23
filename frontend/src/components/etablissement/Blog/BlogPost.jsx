import React from "react";
// import Tags from "./Tags";
import { Link, useLocation } from "react-router-dom";
import Button from "../../shared/Button";
import axios from "axios";

const BlogPost = ({ article }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/admin/blog";
  const handleDelete = () => {
    axios.delete(`http://localhost:5001/blog/${article._id}`);
  };
  console.log(article._id);
  return (
    <>
      {isRootPath && (
        <div className="admin-params">
          <Link to={`/admin/blog/${article._id}/edit`}>
            <Button text="modifier" />{" "}
          </Link>
          <Link onClick={handleDelete}>
            <Button text="Supprimer" />
          </Link>
        </div>
      )}

      <Link
        to={isRootPath ? `/admin/blog/${article._id}` : `/blog/${article._id}`}
      >
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
