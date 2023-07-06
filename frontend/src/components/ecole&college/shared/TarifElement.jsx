import React from "react";
import { useLocation } from "react-router-dom";

const TarifElement = ({ title, price }) => {
  const location = useLocation();
  const isRootPath = location.pathname.includes("/ecole");
  return (
    <div className="tarif-card">
      <h4>{title}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
        dignissimos id nulla eligendi ex aliquid vitae sapiente dolor
        reprehenderit dolore!
      </p>
      <h4 className={isRootPath ? "orange" : "blue"}>{price}</h4>
    </div>
  );
};

export default TarifElement;
