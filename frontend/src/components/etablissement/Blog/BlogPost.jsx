import React from "react";
// import Tags from "./Tags";
import { Link } from "react-router-dom";

const BlogPost = ({ article }) => {
  return (
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
  );
};

export default BlogPost;
