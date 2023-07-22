import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BlogTags from "components/etablissement/Blog/BlogTags";
import "styles/admin/Article/_newArticle.scss";
import NavigationAdmin from "components/admin/NavigationAdmin";
import chevron from "assets/logos/chevron.svg";

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
  });

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "mainImg") {
      // If it's a file input for mainImg, use the first selected file
      const file0 = files[0];
      setArticleData((prevData) => ({
        ...prevData,
        [name]: file0,
      }));
    } else if (name === "illustrations") {
      // If it's a file input for illustrations, use all selected files
      const fileList = Array.from(files); // Convert FileList to an array
      setArticleData((prevData) => ({
        ...prevData,
        [name]: fileList,
      }));
    } else {
      // For other inputs, set the value directly
      setArticleData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddArticle = async () => {
    try {
      const formData = new FormData();
      formData.append("title", articleData.title);
      formData.append("accroche", articleData.accroche);
      formData.append("mainImg", articleData.mainImg);

      // Check if illustrations have been selected before trying to loop through them
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

      console.log(articleData);
      console.log(formData);
      const response = await axios.post(
        `http://localhost:5001/${page}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Article ajouté avec succès !");
      console.log("Nouvel article :", response.data);
      // Rediriger vers la page de l'article nouvellement créé
      {
        page === "actuality"
          ? navigate(`/admin/actualites`)
          : navigate(`/admin/blog`);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
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
      <NavigationAdmin />
      <main>
        <div className="add-article">
          <h2>Ajouter un nouvel article</h2>
          <div className="form-content">
            <div className="back">
              <img src={chevron} alt="" />

              <Link to={isRootPathBlog ? "/admin/blog" : "/admin/actualites"}>
                {" "}
                Retour
              </Link>
            </div>
            <form>
              <div className="form-part">
                <label htmlFor="title">Titre :</label>
                <input
                  type="text"
                  name="title"
                  value={articleData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-part">
                <label htmlFor="accroche">Accroche :</label>
                <textarea
                  name="accroche"
                  value={articleData.accroche}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-part">
                <label htmlFor="introduction">Introduction :</label>
                <textarea
                  name="introduction"
                  value={articleData.introduction}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-part">
                <label htmlFor="subTitle1">Sous-titre 1 :</label>
                <input
                  type="text"
                  name="subTitle1"
                  value={articleData.subTitle1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-part">
                <label htmlFor="content1">Contenu 1 :</label>
                <textarea
                  name="content1"
                  value={articleData.content1}
                  onChange={handleInputChange}
                ></textarea>
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

              <div className="form-part">
                <label htmlFor="author">Auteur :</label>
                <textarea
                  name="author"
                  value={articleData.author}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-part">
                <label htmlFor="illustrations">Image d'ilu :</label>
                <input
                  type="file"
                  name="illustrations"
                  onChange={handleInputChange}
                  accept="image/*"
                  multiple
                />
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
                <label htmlFor="tags">Tags</label>
                <BlogTags
                  handleTagClick={handleTagClick}
                  selectedTags={articleData.tags}
                />
              </div>

              <button type="button" onClick={handleAddArticle}>
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewArticle;
