import React from "react";
import Avis from "./Avis";

const AllAvis = () => {
  return (
    <sections className="avis">
      <h3>Les parents en parlent le mieux</h3>
      <div className="avis-container">
        <Avis />
        <Avis />
        <Avis />
        <Avis />
        <Avis />
      </div>
    </sections>
  );
};

export default AllAvis;