import React from "react";
import "styles/shared/_stylizedH1.scss";

const StylizedH1 = ({ h1, color }) => {
  console.log(color);
  return (
    <>
      <div className="stylizedH1">
        <h1 className={color}>{h1}</h1>
      </div>
    </>
  );
};

export default StylizedH1;
