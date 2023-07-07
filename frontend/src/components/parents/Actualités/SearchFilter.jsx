import React, { useEffect, useState } from "react";
import Tags from "./Tags";
import Button from "../../shared/Button";
import { useLocation } from "react-router-dom";
import chevron from "assets/logos/chevron.svg";
import BlogPost from "components/etablissement/Blog/BlogPost";
import axios from "axios";

const SearchFilter = () => {
  const location = useLocation();
  const isRootPathBlog = location.pathname === "/admin/blog";
  const isRootPathActuality = location.pathname === "/admin/actualites";
  const [blogPost, setBlogPost] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState("+ récent"); // État pour gérer le tri des articles

  const showFilter = () => {
    setIsVisible(!isVisible);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredBlogPosts = blogPost.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  let sortedBlogPosts = filteredBlogPosts;

  if (sortBy === "+ récent") {
    sortedBlogPosts = filteredBlogPosts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    console.log(sortedBlogPosts);
  } else if (sortBy === "+ ancien") {
    sortedBlogPosts = filteredBlogPosts.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }

  useEffect(() => {
    axios.get("http://localhost:5001/blog").then((res) => {
      setBlogPost(res.data);
    });
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
              <img src={chevron} alt="" className={isVisible ? "rotate" : ""} />
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
          <Tags />
          {isRootPathBlog && (
            <Button text="Ajouter un article" link="/admin/blog/new-article" />
          )}
          {isRootPathActuality && (
            <Button
              text="Ajouter un article"
              link="/admin/actualites/new-article"
            />
          )}
        </div>
      </div>
      <div className="blog-container">
        {sortedBlogPosts.length === 0 ? (
          <p id="no-result">Aucun article ne correspond à votre recherche.</p>
        ) : (
          sortedBlogPosts.map((blogPost) => (
            <BlogPost key={blogPost._id} article={blogPost} />
          ))
        )}
      </div>
    </>
  );
};

export default SearchFilter;
