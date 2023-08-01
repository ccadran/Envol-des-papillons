import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import NewFAQQuestion from "./NewFAQQuestion";
import ActualityArticle from "../parents/ActualityArticle";
import PedagogicTeamAdmin from "./PedagogicTeamAdmin";
import NewTeacher from "./NewTeacher";
import MailParent from "./MailParent";
import NewMailParent from "./NewMailParent";
const AdminRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem("tokenAdmin");

    if (!token) {
      // If the token does not exist, navigate to ConnexionAdmins
      navigate("/admin/connexion-admin");
    }
    // Add 'token' to the dependency array to re-run the effect when the token changes.
  }, [navigate]);
  return (
    <div>
      <Routes>
        <Route path="/connexion-admin" element={<ConnexionAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
        <Route path="/blog/new-article" element={<NewArticle />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/FAQ/new-section" element={<NewFAQSection />} />
        <Route path="/FAQ/new-question" element={<NewFAQQuestion />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/actualites/:id" element={<ActualityArticle />} />
        <Route path="/actualites/new-article" element={<NewArticle />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/teachers" element={<PedagogicTeamAdmin />} />
        <Route path="/teachers/new-teacher" element={<NewTeacher />} />
        <Route path="/mails" element={<MailParent />} />
        <Route path="/mails/new-mail" element={<NewMailParent />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
