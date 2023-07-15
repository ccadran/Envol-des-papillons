import React from "react";
import "styles/shared/_stylizedH1.scss";
import { useLocation } from "react-router-dom";

const StylizedH1 = ({ h1 }) => {
  const location = useLocation();
  const isRootPath = location.pathname.includes("/ecole");

  const color = isRootPath
    ? "orange"
    : location.pathname.includes("/college")
    ? "blue"
    : "violet";
  return (
    <>
      <div className="stylizedH1">
        <h1 className={color}>{h1}</h1>
      </div>
    </>
  );
};

export default StylizedH1;
