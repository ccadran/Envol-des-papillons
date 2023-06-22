import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Actualites from "./Actualites";
import Evenements from "./Evenements";
import Avis from "./Avis";
import ConnexionAdmin from "./ConnexionAdmin";
const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ConnexionAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/avis" element={<Avis />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
