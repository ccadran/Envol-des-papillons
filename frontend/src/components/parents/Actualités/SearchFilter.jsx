import React from "react";
import Tags from "./Tags";
import Button from "../../shared/Button";
import { useLocation } from "react-router-dom";

const SearchFilter = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/admin/blog";
  return (
    <div className="search">
      <div className="search-filter">
        <div className="search-bar">
          <p>Barre de recherche</p>
        </div>
        <div className="filter">
          <p>Plus récent</p>
        </div>
      </div>
      <div className="tags-addArticle">
        <Tags />
        {isRootPath && (
          <Button text="Ajouter un article" link="/admin/blog/new-article" />
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
