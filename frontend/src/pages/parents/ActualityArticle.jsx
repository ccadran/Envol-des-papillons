import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import NavigationParents from "../../components/parents/NavigationParents";
import Tags from "../../components/parents/Actualités/Tags";
import PapillonLogo from "../../components/shared/PapillonLogo";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import FooterParents from "components/parents/FooterParents";
import BlogTags from "components/etablissement/Blog/BlogTags";
import chevron from "assets/logos/chevron.svg";

const ActualityArticle = () => {
  const [actualityArticle, setActualityArticle] = useState([]);
  const [updatedActualityArticle, setUpdatedActualityArticle] = useState({
    tags: [],
  });
  const location = useLocation();
  const isRootPath = location.pathname.includes("admin");
  const navigate = useNavigate();
  const { id } = useParams();
  const dateFormated = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5001/actuality/${id}`).then((res) => {
      setActualityArticle(res.data);
      setUpdatedActualityArticle(res.data);
    });
  }, [id]);
  useEffect(() => {
    console.log("Updated article:", updatedActualityArticle);
  }, [updatedActualityArticle]);
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "mainImg") {
      // If it's a file input for mainImg, use the first selected file
      const file0 = files[0];
      setUpdatedActualityArticle((prevArticle) => ({
        ...prevArticle,
        [name]: file0,
      }));
    } else if (name === "illustrations") {
      // If it's a file input for illustrations, use all selected files
      const fileList = Array.from(files); // Convert FileList to an array
      setUpdatedActualityArticle((prevArticle) => ({
        ...prevArticle,
        [name]: fileList,
      }));
    } else {
      // For other inputs, set the value directly
      setUpdatedActualityArticle((prevArticle) => ({
        ...prevArticle,
        [name]: value,
      }));
    }
  };

  const handleTagClick = (tag) => {
    setUpdatedActualityArticle((prevArticle) => {
      const updatedTags = prevArticle.tags.includes(tag)
        ? prevArticle.tags.filter((t) => t !== tag)
        : [...prevArticle.tags, tag];

      console.log("Updated tags:", updatedTags);

      return {
        ...prevArticle,
        tags: updatedTags,
      };
    });
  };
  // const handleMainImgChange = (e) => {
  //   const { files } = e.target;
  //   const newFile = files[0]; // Utiliser le premier fichier sélectionné
  //   console.log("NEW FILE", newFile);

  //   setUpdatedActualityArticle((prevArticle) => ({
  //     ...prevArticle,
  //     mainImg: newFile, // Remplace l'ancienne image par la nouvelle
  //   }));
  // };
  const handleUpdateArticle = () => {
    const formData = new FormData();

    formData.append("title", updatedActualityArticle.title);
    formData.append("accroche", updatedActualityArticle.accroche);
    formData.append("introduction", updatedActualityArticle.introduction);
    formData.append("subTitle1", updatedActualityArticle.subTitle1);
    formData.append("content1", updatedActualityArticle.content1);
    formData.append("subTitle2", updatedActualityArticle.subTitle2);
    formData.append("content2", updatedActualityArticle.content2);
    formData.append("author", actualityArticle.author);

    // Vérifiez si une nouvelle image principale a été sélectionnée
    if (updatedActualityArticle.mainImg instanceof File) {
      formData.append("mainImg", updatedActualityArticle.mainImg);
    } else {
      // Si aucune nouvelle image n'a été sélectionnée,
      // conserver l'URL de l'ancienne image principale dans le FormData
      formData.append("mainImg", actualityArticle.mainImg);
    }
    // Vérifiez si de nouvelles illustrations ont été sélectionnées
    if (updatedActualityArticle.illustrations instanceof Array) {
      updatedActualityArticle.illustrations.forEach((illustration) => {
        formData.append("illustrations", illustration);
      });
    }
    console.log("FORM DATA", formData);
    axios
      .put(`http://localhost:5001/actuality/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // Traitement après la mise à jour réussie
        console.log("Article mis à jour avec succès !");
        navigate(`/admin/actualites`);
      })
      .catch((error) => {
        // Traitement en cas d'erreur lors de la mise à jour
        console.error("Erreur lors de la mise à jour de l'article :", error);
      });
  };

  if (!actualityArticle) {
    return <div>Loading...</div>;
  }

  console.log(actualityArticle.tags);
  console.log("IMAGE", updatedActualityArticle.mainImg);
  return (
    <>
      {isRootPath ? (
        <>
          <NavigationAdmin />
          <main>
            <section className="actuality-article">
              <div className="back">
                <img src={chevron} alt="" />
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
                    <BlogTags
                      selectedTags={updatedActualityArticle.tags}
                      handleTagClick={handleTagClick}
                    />
                  </div>

                  <div className="article-img">
                    {/* Afficher l'image principale */}
                    <img
                      src={updatedActualityArticle.mainImg}
                      alt="image principal actualité"
                    />
                    {/* Choisir une nouvelle image principale */}
                    <input
                      type="file"
                      name="mainImg"
                      onChange={handleInputChange}
                      accept="image/*"
                    />
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
                  {/* <div className="article-images">
                    {updatedActualityArticle.illustrations?.map((image, index) => {
                      return (
                        <img key={index} src={image} alt="image illustrative" />
                      );
                    })}
                  </div> */}
                  <div className="article-images">
                    {updatedActualityArticle.illustrations?.map(
                      (image, index) => {
                        return (
                          <img
                            key={index}
                            src={image}
                            alt="image illustrative"
                          />
                        );
                      }
                    )}
                    <input
                      type="file"
                      name="illustrations"
                      onChange={handleInputChange}
                      accept="image/*"
                      multiple
                    />
                  </div>
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
          {/* <FooterGlobal /> */}
        </>
      ) : (
        <>
          <NavigationParents />
          {/* <NavigationGlobal /> */}
          <main>
            <section className="actuality-article">
              <div className="back">
                <img src={chevron} alt="" />
                <Link to="/etablissement/actualites">Retour</Link>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <div className="article-infos">
                    <h2>{actualityArticle.title}</h2>
                    <p>{actualityArticle.accroche} </p>
                    <Tags tags={actualityArticle.tags} />
                  </div>
                  <div className="article-img">
                    <img
                      src={actualityArticle.mainImg}
                      alt="image principal actualité"
                    />
                  </div>
                </div>
                <div className="article-content">
                  <div className="article-text">
                    <p id="intro">{actualityArticle.introduction} </p>
                    <h4>{actualityArticle.subTitle1} </h4>
                    <p>{actualityArticle.content1} </p>
                    <h4>{actualityArticle.subTitle2} </h4>
                    <p>{actualityArticle.content2} </p>
                    <p id="conclusion">{actualityArticle.conclusion} </p>
                  </div>
                  {/* <div className="article-images">
                    {actualityArticle.illustrations?.map((image, index) => {
                      return (
                        <img key={index} src={image} alt="image illustrative" />
                      );
                    })}
                  </div> */}
                </div>
                <div className="article-author">
                  <PapillonLogo />
                  <div className="author-info">
                    <h5>{actualityArticle.author} </h5>
                    <p> {dateFormated(actualityArticle.createdAt)}</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <FooterParents />
          {/* <FooterGlobal /> */}
        </>
      )}
    </>
  );
};

export default ActualityArticle;
