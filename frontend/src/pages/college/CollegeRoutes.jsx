import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from "./Presentation";
import Pedagogie from "./Pedagogie";
import InfosPratiques from "./InfosPratiques";
import Inscription from "./Inscription";
import FAQ from "./FAQ";
import Contact from "../etablissement/Contact";
import Blog from "../etablissement/Blog";
import About from "./AboutCollege";
import BlogArticleCollege from "./BlogArticleCollege";

const CollegeRoutes = () => {
  return (
    <Routes>
      <Route path="/presentation" element={<Presentation />} />
      <Route path="/pedagogie" element={<Pedagogie />} />
      <Route path="/infos-pratiques" element={<InfosPratiques />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogArticleCollege />} />
      <Route path="/qui-sommes-nous" element={<About />} />
    </Routes>
  );
};

export default CollegeRoutes;
