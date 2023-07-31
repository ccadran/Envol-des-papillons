import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Actualites from "./Actualites";
import Evenements from "./Evenements";
import Menus from "./Menus";
import Avis from "./Avis";
import ActualityArticle from "./ActualityArticle";
import ConnexionParents from "./ConnexionParents";

const ParentsRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem("token");

    if (!token) {
      // If the token does not exist, navigate to ConnexionParents
      navigate("/parents/connexion");
    }
    // Add 'token' to the dependency array to re-run the effect when the token changes.
  }, [navigate]);

  return (
    <Routes>
      <Route path="/connexion" element={<ConnexionParents />} />
      <Route path="/actualites" element={<Actualites />} />
      <Route path="/actualites/:id" element={<ActualityArticle />} />
      <Route path="/evenements" element={<Evenements />} />
      <Route path="/menus" element={<Menus />} />
      <Route path="/avis" element={<Avis />} />
    </Routes>
  );
};

export default ParentsRoutes;
