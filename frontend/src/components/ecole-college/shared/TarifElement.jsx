import React from "react";
import { useLocation } from "react-router-dom";

const TarifElement = ({ title, price, text }) => {
  const location = useLocation();
  const isRootPath = location.pathname.includes("/ecole");
  return (
    <article className="tarif-card">
      <h4>{title}</h4>
      <p>{text}</p>
      <h4 className={isRootPath ? "orange" : "blue"}>{price}</h4>
    </article>
  );
};

export default TarifElement;
