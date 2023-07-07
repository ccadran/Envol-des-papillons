import React from "react";

const Tag = ({ tag, onClick, isSelected }) => {
  return (
    <div className={isSelected ? "tag selected" : "tag"} onClick={onClick}>
      <h5>{tag}</h5>
      {isSelected ? <p>-</p> : <p>+</p>}
    </div>
  );
};

export default Tag;
