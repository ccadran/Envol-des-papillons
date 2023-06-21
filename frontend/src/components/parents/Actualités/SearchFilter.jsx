import React from "react";
import Tags from "./Tags";

const SearchFilter = () => {
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
      <Tags />
    </div>
  );
};

export default SearchFilter;
