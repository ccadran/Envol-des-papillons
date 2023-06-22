import React from "react";
import { Routes, Route } from "react-router-dom";
import Actualites from "./Actualites";
import Evenements from "./Evenements";
import Menus from "./Menus";
import Avis from "./Avis";
import ActualityArticle from "./ActualityArticle";
import ConnexionParents from "./ConnexionParents";
const ParentsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ConnexionParents />} />
      <Route path="/actualites" element={<Actualites />} />
      <Route path="/actualites/:id" element={<ActualityArticle />} />
      <Route path="/evenements" element={<Evenements />} />
      <Route path="/menus" element={<Menus />} />
      <Route path="/avis" element={<Avis />} />
    </Routes>
  );
};

export default ParentsRoutes;
