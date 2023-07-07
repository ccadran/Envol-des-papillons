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
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const filteredBlogPosts = blogPost.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

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
            <p>Plus récent</p>
            <img src={chevron} alt="" />
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
        {filteredBlogPosts.length === 0 ? (
          <p id="no-result">Aucun article ne correspond à votre recherche.</p>
        ) : (
          filteredBlogPosts.map((blogPost) => (
            <BlogPost key={blogPost._id} article={blogPost} />
          ))
        )}
      </div>
    </>
  );
};

export default SearchFilter;
