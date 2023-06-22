import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NavigationParents from "../../components/parents/NavigationParents";
import PapillonLogo from "../../components/shared/PapillonLogo";

const BlogArticle = () => {
  const [blogArticle, setBlogArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/blog/${id}`).then((res) => {
      setBlogArticle(res.data);
    });
  }, [id]);

  if (!blogArticle) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavigationParents />
      <section className="blog-article">
        <div className="back">
          <Link to="/blog">retour</Link>
        </div>
        <div className="article-container">
          <div className="article-header">
            <div className="article-infos">
              <h2>{blogArticle.title}</h2>
              <p>{blogArticle.accroche} </p>
              {/* <Tags /> */}
            </div>
            <div className="article-img">
              <img src="" alt="image principal actualité" />
            </div>
          </div>
          <div className="article-content">
            <div className="article-text">
              <p>{blogArticle.accroche} </p>
              <h4>{blogArticle.subTitle1} </h4>
              <p>{blogArticle.content1} </p>
              <h4>{blogArticle.subTitle2} </h4>
              <p>{blogArticle.content2} </p>
              <p>{blogArticle.conclusion} </p>
            </div>
            <div className="article-images">{/* //Les images */}</div>
          </div>
          <div className="artcile-author">
            <PapillonLogo />
            <div className="author-info">
              <h5>{blogArticle.author} </h5>
              <p> {blogArticle.date}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticle;
