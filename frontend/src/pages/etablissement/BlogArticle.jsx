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

const BlogArticle = () => {
  const [blogArticle, setBlogArticle] = useState([]);
  const [updatedBlogArticle, setUpdatedBlogArticle] = useState({});
  const location = useLocation();
  const isRootPath = location.pathname.includes("admin");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/blog/${id}`).then((res) => {
      setBlogArticle(res.data);
      setUpdatedBlogArticle(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBlogArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
  };

  const handleUpdateArticle = () => {
    axios
      .put(`http://localhost:5001/blog/${id}`, updatedBlogArticle)
      .then((res) => {
        // Traitement après la mise à jour réussie
        console.log("Article mis à jour avec succès !");
        navigate(`/admin/blog`);
      })
      .catch((error) => {
        // Traitement en cas d'erreur lors de la mise à jour
        console.error("Erreur lors de la mise à jour de l'article :", error);
      });
  };

  if (!blogArticle) {
    return <div>Loading...</div>;
  }

  console.log(blogArticle.tags);
  return (
    <>
      {isRootPath ? (
        <>
          <NavigationAdmin />
          <main>
            <section className="blog-article">
              <div className="back">
                <Link to="/admin/blog">retour</Link>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <div className="article-infos">
                    <h2>Titre</h2>
                    <input
                      type="text"
                      name="title"
                      value={updatedBlogArticle.title}
                      onChange={handleInputChange}
                    />
                    <p>Accroche</p>
                    <textarea
                      type="text"
                      name="accroche"
                      value={updatedBlogArticle.accroche}
                      onChange={handleInputChange}
                    />
                    {/* <Tags /> */}
                  </div>
                  <div className="article-img">
                    <img src="" alt="image principal actualité" />
                  </div>
                </div>
                <div className="article-content">
                  <div className="article-text">
                    <p>Introduction</p>
                    <textarea
                      name="introduction"
                      value={updatedBlogArticle.introduction}
                      onChange={handleInputChange}
                    />
                    <h4>Sous-titre</h4>
                    <input
                      type="text"
                      name="subTitle1"
                      value={updatedBlogArticle.subTitle1}
                      onChange={handleInputChange}
                    />
                    <p>Premier bloc de texte</p>
                    <textarea
                      name="content1"
                      value={updatedBlogArticle.content1}
                      onChange={handleInputChange}
                    />
                    <h4>Deuxième Sous-titre</h4>
                    <input
                      type="text"
                      name="subTitle2"
                      value={updatedBlogArticle.subTitle2}
                      onChange={handleInputChange}
                    />
                    <p>Deuxième bloc de texte</p>
                    <textarea
                      name="content2"
                      value={updatedBlogArticle.content2}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="article-images">{/* //Les images */}</div>
                </div>
                <div className="artcile-author">
                  <PapillonLogo />
                  <div className="author-info">
                    <h5>{blogArticle.author}</h5>
                    <p>{blogArticle.date}</p>
                  </div>
                </div>
              </div>
            </section>
            <Link onClick={handleUpdateArticle}>Mettre à jour</Link>
          </main>
          <FooterGlobal />
        </>
      ) : (
        <>
          <NavigationGlobal />
          <main>
            <section className="blog-article">
              <div className="back">
                <Link to="/etablissement/blog">retour</Link>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <div className="article-infos">
                    <h2>{blogArticle.title}</h2>
                    <p>{blogArticle.accroche} </p>
                    {/* <p>{blogArticle.tags} </p>
                    <Tags tags={blogArticle.tags} /> */}
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
          </main>
          <FooterGlobal />
        </>
      )}
    </>
  );
};

export default BlogArticle;
