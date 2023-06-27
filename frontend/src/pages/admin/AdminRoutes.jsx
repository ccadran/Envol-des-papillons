import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Actualites from "./Actualites";
import Evenements from "./Evenements";
import Avis from "./Avis";
import ConnexionAdmin from "./ConnexionAdmin";
import BlogArticle from "../etablissement/BlogArticle";
import NewArticle from "./NewArticle";
import NewFAQSection from "./NewFAQSection";
const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ConnexionAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
        <Route path="/blog/new-article" element={<NewArticle />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/FAQ/new-section" element={<NewFAQSection />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/avis" element={<Avis />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
