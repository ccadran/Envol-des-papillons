import React from "react";

const BlogArticle = ({ article }) => {
  return (
    // <Link to={`/parents/actualites/${actuality._id}`}>
    <div className="actuality">
      <div className="actuality-info">
        <h4>{article.title}</h4>
        <p>{article.accroche}</p>
        {/* <Tags /> */}
      </div>
      <div className="actuality-img">
        <img src="" alt="image principal actualité" />
      </div>
    </div>
    // </Link>
  );
};

export default BlogArticle;
