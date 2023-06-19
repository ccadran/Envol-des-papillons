import React, { useState, useEffect } from "react";
import logo from "../../assets/logos/papillon.svg";
import PapillonLogo from "./PapillonLogo";

const Avis = ({ avi }) => {
  const [papillonColor, setPapillonColor] = useState("orange");

  const colors = ["orange", "blue", "green", "red", "purple"];

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setPapillonColor(randomColor);
  }, []);

  const dateFormated = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="avis card">
      <div className="avis-header">
        <PapillonLogo />
        <div className="avis-header-info">
          <h5>{avi.author}</h5>
          <p>{dateFormated(avi.createdAt)}</p>
        </div>
      </div>
      <div className="avis-content">
        <p>{avi.message}</p>
      </div>
    </div>
  );
};

export default Avis;
