import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewArticle = () => {
  const [articleData, setArticleData] = useState({
    title: "",
    accroche: "",
    introduction: "",
    subTitle1: "",
    content1: "",
    subTitle2: "",
    content2: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddArticle = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/blog",
        articleData
      );
      console.log("Article ajouté avec succès !");
      console.log("Nouvel article :", response.data);
      // Rediriger vers la page de l'article nouvellement créé
      navigate(`/admin/blog`);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
    }
  };

  return (
    <div className="add-article">
      <h2>Ajouter un nouvel article</h2>
      <form>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          name="title"
          value={articleData.title}
          onChange={handleInputChange}
        />

        <label htmlFor="accroche">Accroche :</label>
        <textarea
          name="accroche"
          value={articleData.accroche}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="introduction">Introduction :</label>
        <textarea
          name="introduction"
          value={articleData.introduction}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="subTitle1">Sous-titre 1 :</label>
        <input
          type="text"
          name="subTitle1"
          value={articleData.subTitle1}
          onChange={handleInputChange}
        />

        <label htmlFor="content1">Contenu 1 :</label>
        <textarea
          name="content1"
          value={articleData.content1}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="subTitle2">Sous-titre 2 :</label>
        <input
          type="text"
          name="subTitle2"
          value={articleData.subTitle2}
          onChange={handleInputChange}
        />

        <label htmlFor="content2">Contenu 2 :</label>
        <textarea
          name="content2"
          value={articleData.content2}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="author">Auteur :</label>
        <textarea
          name="author"
          value={articleData.author}
          onChange={handleInputChange}
        ></textarea>

        <button type="button" onClick={handleAddArticle}>
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default NewArticle;
