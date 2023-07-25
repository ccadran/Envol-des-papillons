import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavigationParents from "../../components/parents/NavigationParents";
import PapillonLogo from "../../components/shared/PapillonLogo";
import FooterGlobal from "../../components/shared/FooterGlobal";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import { useLocation } from "react-router-dom";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import Tags from "components/parents/Actualités/Tags";
import chevron from "assets/logos/chevron.svg";
import "styles/etablissement/Blog/_blogArticle.scss";
import "styles/admin/Article/_blogArticleAdmin.scss";
import BlogTags from "components/etablissement/Blog/BlogTags";
import Button from "components/shared/Button";
import SingleCaroussel from "components/shared/SingleCaroussel";
import FooterScolarity from "components/ecole&college/shared/FooterScolarity";
import NavigationScolarity from "components/ecole&college/shared/NavigationScolarity";
import CarousselArticle from "components/shared/CarousselArticle";

const BlogArticleSchool = () => {
  const [blogArticle, setBlogArticle] = useState([]);

  const location = useLocation();
  let backUrl = "";
  if (location.pathname.includes("etablissement")) {
    backUrl = "/etablissement/blog";
  } else if (location.pathname.includes("college")) {
    backUrl = "/college/blog";
  } else {
    backUrl = "/ecole/blog";
  }
  const { id } = useParams();
  const navigate = useNavigate();
  const dateFormated = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5001/blog/${id}`).then((res) => {
      setBlogArticle(res.data);
    });
  }, [id]);

  return (
    <>
      <>
        <NavigationScolarity etablissement="ecole" />
        <main>
          <section className="blog-article">
            <div className="back">
              <Link to={backUrl}>
                <img src={chevron} alt="" />
                Retour
              </Link>
            </div>
            <div className="article-container">
              <div className="article-header">
                <div className="article-infos">
                  <h2>{blogArticle.title}</h2>
                  <p>{blogArticle.accroche} </p>
                  <Tags tags={blogArticle.tags} isSelected={true} />
                </div>
                <div className="article-img">
                  <img
                    src={blogArticle.mainImg}
                    alt="image principal actualité"
                  />
                </div>
              </div>
              <div className="article-content">
                <div className="article-text">
                  <p id="intro">{blogArticle.introduction} </p>
                  <h4>{blogArticle.subTitle1} </h4>
                  <p>{blogArticle.content1} </p>
                  <h4>{blogArticle.subTitle2} </h4>
                  <p>{blogArticle.content2} </p>
                  <p id="conclusion">{blogArticle.conclusion} </p>
                  <CarousselArticle images={blogArticle.illustrations} />
                </div>
              </div>
              <div className="article-author">
                <PapillonLogo />
                <div className="author-info">
                  <h5>{blogArticle.author} </h5>
                  <p> {dateFormated(blogArticle.createdAt)}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterScolarity etablissement="ecole" />
      </>
    </>
  );
};

export default BlogArticleSchool;
