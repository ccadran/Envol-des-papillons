import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BlogTags from "components/etablissement/Blog/BlogTags";
import "styles/admin/Article/_newArticle.scss";
import NavigationAdmin from "components/admin/NavigationAdmin";
import chevron from "assets/logos/chevron.svg";
import { set } from "mongoose";
import { Helmet } from "react-helmet";

const NewArticle = () => {
  const location = useLocation();
  const isRootPathBlog = location.pathname.includes("/blog");
  const [page = isRootPathBlog ? "blog" : "actuality", setPage] = useState();

  const [articleData, setArticleData] = useState({
    title: "",
    accroche: "",
    mainImg: [],
    illustrations: [],
    tags: [],
    introduction: "",
    subTitle1: "",
    content1: "",
    subTitle2: "",
    content2: "",
    author: "",
  });

  const navigate = useNavigate();
  const [missingFields, setMissingFields] = useState([]);
  const [errorText, setErrorText] = useState("");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "mainImg") {
      const file0 = files[0];
      setArticleData((prevData) => ({
        ...prevData,
        [name]: file0,
      }));
    } else if (name === "illustrations") {
      const fileList = Array.from(files);
      setArticleData((prevData) => ({
        ...prevData,
        [name]: fileList,
      }));
    } else {
      setArticleData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddArticle = async () => {
    try {
      const requiredFields = [
        "title",
        "accroche",
        "introduction",
        "subTitle1",
        "content1",
        "author",
      ];

      const missing = requiredFields.filter((field) => !articleData[field]);

      if (missing.length > 0) {
        setMissingFields(missing);
        setErrorText("Veuillez remplir tous les champs obligatoires");
        return;
      }

      const formData = new FormData();
      formData.append("title", articleData.title);
      formData.append("accroche", articleData.accroche);
      formData.append("mainImg", articleData.mainImg);

      if (articleData.illustrations && articleData.illustrations.length > 0) {
        articleData.illustrations.forEach((illustration, index) => {
          formData.append(
            "illustrations",
            illustration,
            `illustration_${index}`
          );
        });
      }

      formData.append("introduction", articleData.introduction);
      formData.append("subTitle1", articleData.subTitle1);
      formData.append("content1", articleData.content1);
      formData.append("subTitle2", articleData.subTitle2);
      formData.append("content2", articleData.content2);
      formData.append("author", articleData.author);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/${page}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Article ajouté avec succès !");
      console.log("Nouvel article :", response.data);
      {
        page === "actuality"
          ? navigate(`/admin/actualites`)
          : navigate(`/admin/blog`);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
      setErrorText(
        "Erreur lors de l'ajout de l'article, vérifier que tous les champs sont remplis"
      );
      console.log(errorText);
    }
  };

  const [blogTags, setBlogTags] = useState([]);
  const handleTagClick = (tag) => {
    setArticleData((prevData) => {
      const updatedTags = prevData.tags.includes(tag)
        ? prevData.tags.filter((t) => t !== tag)
        : [...prevData.tags, tag];

      console.log("Updated tags:", updatedTags);

      return {
        ...prevData,
        tags: updatedTags,
      };
    });
  };

  return (
    <>
      <Helmet>
        <title>Nouvel article - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <div className="add-article">
          <h2>Ajouter un nouvel article</h2>
          <div className="form-content">
            <div className="back">
              <Link to={isRootPathBlog ? "/admin/blog" : "/admin/actualites"}>
                {" "}
                <img src={chevron} alt="" />
                Retour
              </Link>
            </div>
            <form>
              <div
                className={`form-part ${
                  missingFields.includes("title") ? "error" : ""
                }`}
              >
                <label htmlFor="title">Titre :</label>
                <input
                  type="text"
                  name="title"
                  value={articleData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className={`form-part ${
                  missingFields.includes("accroche") ? "error" : ""
                }`}
              >
                <label htmlFor="accroche">Accroche :</label>
                <textarea
                  type="text"
                  name="accroche"
                  value={articleData.accroche}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className={`form-part ${
                  missingFields.includes("introduction") ? "error" : ""
                }`}
              >
                <label htmlFor="introduction">Introduction :</label>
                <textarea
                  type="text"
                  name="introduction"
                  value={articleData.introduction}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className={`form-part ${
                  missingFields.includes("subTitle1") ? "error" : ""
                }`}
              >
                <label htmlFor="subTitle1">Sous-titre 1 :</label>
                <input
                  type="text"
                  name="subTitle1"
                  value={articleData.subTitle1}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className={`form-part ${
                  missingFields.includes("content1") ? "error" : ""
                }`}
              >
                <label htmlFor="content1">Contenu 1 :</label>
                <textarea
                  type="text"
                  name="content1"
                  value={articleData.content1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-part">
                <label htmlFor="subTitle2">Sous-titre 2 :</label>
                <input
                  type="text"
                  name="subTitle2"
                  value={articleData.subTitle2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-part">
                <label htmlFor="content2">Contenu 2 :</label>
                <textarea
                  name="content2"
                  value={articleData.content2}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div
                className={`form-part ${
                  missingFields.includes("author") ? "error" : ""
                }`}
              >
                <label htmlFor="author">Auteur :</label>
                <input
                  name="author"
                  value={articleData.author}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="form-part">
                <label htmlFor="mainImg">Image principale :</label>
                <input
                  type="file"
                  name="mainImg"
                  onChange={handleInputChange}
                  accept="image/*"
                />
              </div>
              <div className="form-part">
                <label htmlFor="illustrations">Image d'ilustrations :</label>
                <input
                  type="file"
                  name="illustrations"
                  onChange={handleInputChange}
                  accept="image/*"
                  multiple
                />
              </div>
              <div className="form-part">
                <label htmlFor="tags">Tags</label>
                <BlogTags
                  handleTagClick={handleTagClick}
                  selectedTags={articleData.tags}
                />
              </div>
              <button type="button" onClick={handleAddArticle}>
                Ajouter l'article d'actualité
              </button>
              {errorText && <p className="error">{errorText}</p>}
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewArticle;
