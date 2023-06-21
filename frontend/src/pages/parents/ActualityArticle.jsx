import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavigationParents from "../../components/parents/NavigationParents";
import Tags from "../../components/parents/Actualités/Tags";
import PapillonLogo from "../../components/shared/PapillonLogo";

const ActualityArticle = () => {
  const [actualityArticle, setActualityArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/actuality/${id}`).then((res) => {
      setActualityArticle(res.data);
    });
  }, [id]);

  if (!actualityArticle) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavigationParents />
      <section className="actuality-article">
        <div className="back">
          <Link to="/parents/actualites">retour</Link>
        </div>
        <div className="article-container">
          <div className="article-header">
            <div className="article-infos">
              <h2>{actualityArticle.title}</h2>
              <p>{actualityArticle.accroche} </p>
              <Tags />
            </div>
            <div className="article-img">
              <img src="" alt="image principal actualité" />
            </div>
          </div>
          <div className="article-content">
            <div className="article-text">
              <p>{actualityArticle.accroche} </p>
              <h4>{actualityArticle.subTitle1} </h4>
              <p>{actualityArticle.content1} </p>
              <h4>{actualityArticle.subTitle2} </h4>
              <p>{actualityArticle.content2} </p>
              <p>{actualityArticle.conclusion} </p>
            </div>
            <div className="article-images">{/* //Les images */}</div>
          </div>
          <div className="artcile-author">
            <PapillonLogo />
            <div className="author-info">
              <h5>{actualityArticle.author} </h5>
              <p> {actualityArticle.date}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActualityArticle;
