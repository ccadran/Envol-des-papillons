import React from "react";

const Tag = ({ tag }) => {
  return (
    <>
      <div className="tag">
        <h5>{tag}</h5>
        <p>-</p>
      </div>
    </>
  );
};

export default Tag;
