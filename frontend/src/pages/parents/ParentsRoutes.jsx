import React from "react";
import { Routes, Route } from "react-router-dom";
import Connexion from "./Connexion";
import Actualites from "./Actualites";
import Evenements from "./Evenements";
import Menus from "./Menus";
import Avis from "./Avis";
const ParentsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/actualites" element={<Actualites />} />
      <Route path="/evenements" element={<Evenements />} />
      <Route path="/menus" element={<Menus />} />
      <Route path="/avis" element={<Avis />} />
    </Routes>
  );
};

export default ParentsRoutes;
