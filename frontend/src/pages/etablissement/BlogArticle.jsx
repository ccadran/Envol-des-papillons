import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PapillonLogo from "../../components/shared/PapillonLogo";
import FooterGlobal from "../../components/shared/FooterGlobal";
import NavigationGlobal from "../../components/shared/NavigationGlobal";
import { useLocation } from "react-router-dom";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import Tags from "components/parents/Actualités/Tags";
import "styles/etablissement/Blog/_blogArticle.scss";
import "styles/admin/Article/_blogArticleAdmin.scss";
import BlogTags from "components/etablissement/Blog/BlogTags";
import CarousselArticle from "components/shared/CarousselArticle";
import { Helmet } from "react-helmet";
import Back from "components/shared/Back";

const BlogArticle = () => {
  const [blogArticle, setBlogArticle] = useState([]);
  const [updatedBlogArticle, setUpdatedBlogArticle] = useState({
    tags: [],
  });

  const location = useLocation();
  const isRootPath = location.pathname.includes("admin");
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
    axios.get(`${process.env.REACT_APP_API_URL}/blog/${id}`).then((res) => {
      setBlogArticle(res.data);
      setUpdatedBlogArticle(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "mainImg") {
      // If it's a file input for mainImg, use the first selected file
      const file0 = files[0];
      setUpdatedBlogArticle((prevArticle) => ({
        ...prevArticle,
        mainImg: file0,
      }));
    } else if (name === "illustrations") {
      // If it's a file input for illustrations, use all selected files
      const fileList = Array.from(files); // Convert FileList to an array
      setUpdatedBlogArticle((prevArticle) => ({
        ...prevArticle,
        illustrations: fileList,
      }));
    } else {
      // For other inputs, set the value directly
      setUpdatedBlogArticle((prevArticle) => ({
        ...prevArticle,
        [name]: value,
      }));
    }
  };

  const handleTagClick = (tag) => {
    setUpdatedBlogArticle((prevArticle) => {
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

  const handleUpdateArticle = () => {
    const formData = new FormData();

    formData.append("title", updatedBlogArticle.title);
    formData.append("accroche", updatedBlogArticle.accroche);
    formData.append("introduction", updatedBlogArticle.introduction);
    formData.append("subTitle1", updatedBlogArticle.subTitle1);
    formData.append("content1", updatedBlogArticle.content1);

    updatedBlogArticle.tags.forEach((tag, index) => {
      formData.append(`tags[${index}]`, tag);
    });

    if (updatedBlogArticle.subTitle2) {
      formData.append("subTitle2", updatedBlogArticle.subTitle2);
    }

    if (updatedBlogArticle.content2) {
      formData.append("content2", updatedBlogArticle.content2);
    }
    formData.append("author", blogArticle.author);

    // Vérifiez si une nouvelle image principale a été sélectionnée
    if (updatedBlogArticle.mainImg instanceof File) {
      formData.append("mainImg", updatedBlogArticle.mainImg);
    } else {
      // Si aucune nouvelle image n'a été sélectionnée,
      // conserver l'BACKURL de l'ancienne image principale dans le FormData
      formData.append("mainImg", blogArticle.mainImg);
    }
    // Vérifiez si de nouvelles illustrations ont été sélectionnées
    if (
      Array.isArray(updatedBlogArticle.illustrations) &&
      updatedBlogArticle.illustrations.length > 0
    ) {
      updatedBlogArticle.illustrations.forEach((illustration) => {
        formData.append("illustrations", illustration);
      });
    } else {
      // Si aucune nouvelle illustration n'a été sélectionnée,
      // conserver les BACKURLs des illustrations existantes dans le FormData
      blogArticle.illustrations.forEach((illustration) => {
        formData.append("illustrations", illustration);
      });
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/blog/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
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
  const blogTitle = "Blog - " + blogArticle.title;
  return (
    <>
      <Helmet>
        <title>{blogTitle}</title>
        <meta name="description" content={blogArticle.accroche} />
      </Helmet>
      {isRootPath ? (
        <>
          <NavigationAdmin />
          <main>
            <section className="blog-article">
              <Back link="/admin/blog" />
              <article className="article-container-admin">
                <div className="article-header">
                  <div className="article-infos">
                    <div className="form-part">
                      <h4>Titre</h4>
                      <input
                        type="text"
                        name="title"
                        value={updatedBlogArticle.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-part">
                      <h4>Accroche</h4>
                      <textarea
                        type="text"
                        name="accroche"
                        value={updatedBlogArticle.accroche}
                        onChange={handleInputChange}
                      />
                    </div>
                    <BlogTags
                      selectedTags={updatedBlogArticle.tags}
                      handleTagClick={handleTagClick}
                    />
                  </div>

                  <div className="article-img">
                    <div className="img-container">
                      <img
                        src={updatedBlogArticle.mainImg}
                        alt="illustration principal actualité"
                        loading="lazy"
                      />
                    </div>
                    <div className="form-part">
                      <h4>Image principale</h4>
                      <input
                        type="file"
                        name="mainImg"
                        onChange={handleInputChange}
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <div className="article-text">
                    <div className="form-part">
                      <h4>Introduction</h4>
                      <textarea
                        name="introduction"
                        value={updatedBlogArticle.introduction}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-part">
                      <h4>Sous-titre</h4>
                      <input
                        type="text"
                        name="subTitle1"
                        value={updatedBlogArticle.subTitle1}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-part">
                      <h4>Premier bloc de texte</h4>
                      <textarea
                        name="content1"
                        value={updatedBlogArticle.content1}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-part">
                      <h4>Deuxième Sous-titre</h4>
                      <input
                        type="text"
                        name="subTitle2"
                        value={updatedBlogArticle.subTitle2}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-part">
                      <h4>Deuxième bloc de texte</h4>
                      <textarea
                        name="content2"
                        value={updatedBlogArticle.content2}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="article-images">
                    <CarousselArticle images={blogArticle.illustrations} />

                    <div className="form-part">
                      <h4>Images d'illustrations</h4>
                      <input
                        type="file"
                        name="illustrations"
                        onChange={handleInputChange}
                        accept="image/*"
                        multiple
                      />
                    </div>
                  </div>
                </div>
                <button onClick={handleUpdateArticle}>Mettre à jour</button>
                <div className="article-author">
                  <PapillonLogo />
                  <div className="author-info">
                    <h5>{blogArticle.author}</h5>
                    <p>{blogArticle.date}</p>
                  </div>
                </div>
              </article>
            </section>
          </main>
          <FooterGlobal />
        </>
      ) : (
        <>
          <NavigationGlobal />
          <main>
            <section className="blog-article">
              <Back link={backUrl} />
              <article className="article-container">
                <div className="article-header">
                  <div className="article-infos">
                    <h2>{blogArticle.title}</h2>
                    <p>{blogArticle.accroche} </p>
                    <Tags tags={blogArticle.tags} isSelected={true} />
                  </div>
                  <div className="article-img">
                    <img
                      src={blogArticle.mainImg}
                      alt="illustration principal actualité"
                      loading="lazy"
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
                  </div>
                  <CarousselArticle images={blogArticle.illustrations} />
                </div>
                <div className="article-author">
                  <PapillonLogo />
                  <div className="author-info">
                    <h5>{blogArticle.author} </h5>
                    <p> {dateFormated(blogArticle.createdAt)}</p>
                  </div>
                </div>
              </article>
            </section>
          </main>
          <FooterGlobal />
        </>
      )}
    </>
  );
};

export default BlogArticle;
