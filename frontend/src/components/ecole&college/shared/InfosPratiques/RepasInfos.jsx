import React from "react";
import RepasCard from "./RepasCard";

const RepasInfos = () => {
  return (
    <div>
      <h1>Les repas</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium
        recusandae doloribus eveniet ipsa libero tempora voluptatem impedit
        vitae corrupti!
      </p>
      <div className="repas-container">
        <RepasCard />
        <RepasCard />
      </div>
    </div>
  );
};

export default RepasInfos;
