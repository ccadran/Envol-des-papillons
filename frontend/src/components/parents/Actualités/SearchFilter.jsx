import React, { useEffect, useState } from "react";
import Button from "../../shared/Button";
import { useLocation } from "react-router-dom";
import chevron from "assets/logos/chevron.svg";
import BlogPost from "components/etablissement/Blog/BlogPost";
import axios from "axios";
import BlogTags from "components/etablissement/Blog/BlogTags";
import Actuality from "./Actuality";

const SearchFilter = () => {
  const location = useLocation();
  const isRootPathBlog = location.pathname === "/admin/blog";
  const isRootPathActuality = location.pathname === "/admin/actualites";
  const [blogPost, setBlogPost] = useState([]);
  const [actualityPost, setActualityPost] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState("+ récent"); // État pour gérer le tri des articles
  const [selectedTags, setSelectedTags] = useState([]); // État pour gérer les tags sélectionnés
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const showFilter = () => {
    setIsVisible(!isVisible);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const filteredPosts = location.pathname.includes("blog")
    ? blogPost.filter((post) => {
        const lowercaseTitle = post.title.toLowerCase();
        const lowercaseSearchText = searchText.toLowerCase();

        const titleMatches = lowercaseTitle.includes(lowercaseSearchText);

        const hasSelectedTags =
          selectedTags.length === 0 ||
          post.tags.some((tag) => selectedTags.includes(tag));

        return titleMatches && hasSelectedTags;
      })
    : location.pathname.includes("actualites")
    ? actualityPost.filter((post) => {
        const lowercaseTitle = post.title.toLowerCase();
        const lowercaseSearchText = searchText.toLowerCase();

        const titleMatches = lowercaseTitle.includes(lowercaseSearchText);

        const hasSelectedTags =
          selectedTags.length === 0 ||
          post.tags.some((tag) => selectedTags.includes(tag));

        return titleMatches && hasSelectedTags;
      })
    : [];

  let sortedPosts = filteredPosts;

  if (sortBy === "+ récent") {
    sortedPosts = filteredPosts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sortBy === "+ ancien") {
    sortedPosts = filteredPosts.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }

  useEffect(() => {
    if (location.pathname.includes("blog")) {
      axios.get(`${process.env.REACT_APP_API_URL}/blog`).then((res) => {
        setBlogPost(res.data);
      });
    } else if (location.pathname.includes("actualites")) {
      axios.get(`${process.env.REACT_APP_API_URL}/actuality`).then((res) => {
        setActualityPost(res.data);
      });
    }
  }, []);

  return (
    <>
      <div className="search">
        <div className="search-filter">
          <div className="search-bar">
            <input
              type="text"
              placeholder="&#x1F50D; Rechercher"
              value={searchText}
              onChange={handleSearchChange}
            ></input>
          </div>
          <div className="filter">
            <div className="change-filter" onClick={showFilter}>
              <p>{sortBy}</p>
              <img
                src={chevron}
                alt="chevron"
                className={isVisible ? "rotate" : ""}
                loading="lazy"
              />
            </div>
            <div className={isVisible ? "filter-menu  " : "filter-menu hidden"}>
              <p
                className={sortBy === "+ récent" ? "active" : ""}
                onClick={() => setSortBy("+ récent")}
              >
                + récent
              </p>
              <p
                className={sortBy === "+ ancien" ? "active" : ""}
                onClick={() => setSortBy("+ ancien")}
              >
                + ancien
              </p>
            </div>
          </div>
        </div>

        <div className="tags-addArticle">
          <BlogTags
            handleTagClick={handleTagClick}
            selectedTags={selectedTags}
          />
          <div className="add-article-tags">
            {isRootPathBlog && (
              <Button
                text="Ajouter un article"
                link="/admin/blog/new-article"
                color="violet"
              />
            )}
            {isRootPathActuality && (
              <Button
                text="Ajouter un article"
                link="/admin/actualites/new-article"
                color="violet"
              />
            )}
          </div>
        </div>
      </div>
      {location.pathname.includes("blog") ? (
        <div className="blog-container">
          {sortedPosts.length === 0 ? (
            <p id="no-result">Aucun article ne correspond à votre recherche.</p>
          ) : (
            sortedPosts.map((blogPost) => (
              <BlogPost
                key={blogPost._id}
                article={blogPost}
                selectedTags={selectedTags}
              />
            ))
          )}
        </div>
      ) : location.pathname.includes("actualites") ? (
        <div className="actuality-container">
          {sortedPosts.length === 0 ? (
            <p id="no-result">Aucun article ne correspond à votre recherche.</p>
          ) : (
            sortedPosts.map((actualityPost) => (
              <Actuality
                key={actualityPost._id}
                actuality={actualityPost}
                selectedTags={selectedTags}
              />
            ))
          )}
        </div>
      ) : (
        <div>Aucune correspondance de chemin d'accès trouvée.</div>
      )}
    </>
  );
};

export default SearchFilter;
