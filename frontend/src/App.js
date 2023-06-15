import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/etablissement/Acceuil";
import Presentation from "./pages/ecole/Presentation";
import EcoleRoutes from "./pages/ecole/EcoleRoutes";
import Blog from "./pages/etablissement/Blog";
import Contact from "./pages/etablissement/Contact";
import CollegeRoutes from "./pages/college/CollegeRoutes";
import ParentsRoutes from "./pages/parents/ParentsRoutes";
import AdminRoutes from "./pages/admin/AdminRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/ecole/*" element={<EcoleRoutes />} />
        <Route path="/college/*" element={<CollegeRoutes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/parents/*" element={<ParentsRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
