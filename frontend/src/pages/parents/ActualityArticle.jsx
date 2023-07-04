import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import NavigationParents from "../../components/parents/NavigationParents";
import Tags from "../../components/parents/Actualités/Tags";
import PapillonLogo from "../../components/shared/PapillonLogo";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import FooterParents from "components/parents/FooterParents";

const ActualityArticle = () => {
  const [actualityArticle, setActualityArticle] = useState([]);
  const [updatedActualityArticle, setUpdatedActualityArticle] = useState({});
  const location = useLocation();
  const isRootPath = location.pathname.includes("admin");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/actuality/${id}`).then((res) => {
      setActualityArticle(res.data);
      setUpdatedActualityArticle(res.data);
      console.log(id);
    });
  }, [id]);

  if (!actualityArticle) {
    return <div>Loading...</div>;
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedActualityArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
  };
  const handleUpdateArticle = () => {
    axios
      .put(`http://localhost:5001/actuality/${id}`, updatedActualityArticle)
      .then((res) => {
        console.log("Article mis à jour avec succès !");
        navigate(`/admin/actualites`);
      });
  };

  return (
    <>
      {isRootPath ? (
        <>
          <NavigationAdmin />
          <main>
            <section className="actuality-article">
              <div className="back">
                <Link to="/admin/actualites">retour</Link>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <div className="article-infos">
                    <h2>Titre</h2>
                    <input
                      type="text"
                      name="title"
                      value={updatedActualityArticle.title}
                      onChange={handleInputChange}
                    />
                    <p>Accroche</p>
                    <textarea
                      type="text"
                      name="accroche"
                      value={updatedActualityArticle.accroche}
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
                      value={updatedActualityArticle.introduction}
                      onChange={handleInputChange}
                    />
                    <h4>Sous-titre</h4>
                    <input
                      type="text"
                      name="subTitle1"
                      value={updatedActualityArticle.subTitle1}
                      onChange={handleInputChange}
                    />
                    <p>Premier bloc de texte</p>
                    <textarea
                      name="content1"
                      value={updatedActualityArticle.content1}
                      onChange={handleInputChange}
                    />
                    <h4>Deuxième Sous-titre</h4>
                    <input
                      type="text"
                      name="subTitle2"
                      value={updatedActualityArticle.subTitle2}
                      onChange={handleInputChange}
                    />
                    <p>Deuxième bloc de texte</p>
                    <textarea
                      name="content2"
                      value={updatedActualityArticle.content2}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="article-images">{/* Les images */}</div>
                </div>
                <div className="artcile-author">
                  <PapillonLogo />
                  <div className="author-info">
                    <h5>{actualityArticle.author}</h5>
                    <p>{actualityArticle.date}</p>
                  </div>
                </div>
              </div>
            </section>
            <Link onClick={handleUpdateArticle}>Mettre à jour</Link>
          </main>
          <FooterParents />
        </>
      ) : (
        <>
          <NavigationParents />
          <main>
            <section className="actuality-article">
              <div className="back">
                <Link to="/parents/actualites">retour</Link>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <div className="article-infos">
                    <h2>{actualityArticle.title}</h2>
                    <p>{actualityArticle.accroche}</p>
                    <Tags />
                  </div>
                  <div className="article-img">
                    <img src="" alt="image principal actualité" />
                  </div>
                </div>
                <div className="article-content">
                  <div className="article-text">
                    <p>{actualityArticle.accroche}</p>
                    <h4>{actualityArticle.subTitle1}</h4>
                    <p>{actualityArticle.content1}</p>
                    <h4>{actualityArticle.subTitle2}</h4>
                    <p>{actualityArticle.content2}</p>
                    <p>{actualityArticle.conclusion}</p>
                  </div>
                  <div className="article-images">{/* Les images */}</div>
                </div>
                <div className="artcile-author">
                  <PapillonLogo />
                  <div className="author-info">
                    <h5>{actualityArticle.author}</h5>
                    <p>{actualityArticle.date}</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <FooterParents />
        </>
      )}
    </>
  );
};

export default ActualityArticle;
