import React from "react";
import Tags from "./Tags";
import Button from "../../shared/Button";
import { useLocation } from "react-router-dom";
import chevron from "assets/logos/chevron.svg";

const SearchFilter = () => {
  const location = useLocation();
  const isRootPathBlog = location.pathname === "/admin/blog";
  const isRootPathActuality = location.pathname === "/admin/actualites";
  return (
    <div className="search">
      <div className="search-filter">
        <div className="search-bar">
          <textarea placeholder="Rechercher"></textarea>
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
  );
};

export default SearchFilter;
