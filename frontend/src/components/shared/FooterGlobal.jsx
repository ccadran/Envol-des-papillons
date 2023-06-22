import React from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import PapillonLogo from "./PapillonLogo";

const FooterGlobal = () => {
  const location = useLocation();
  const isActive =
    location.pathname === "/" || location.pathname.split("/").length === 2;

  return (
    <footer className="footer-global">
      <div className="main-nav">
        <ul>
          <NavLink
            to="/ecole/presentation"
            className={`nav-link ${
              location.pathname.includes("/ecole") ? "active" : ""
            }`}
          >
            <li>L'école</li>
          </NavLink>
          <NavLink
            to="/college/presentation"
            className={`nav-link ${
              location.pathname.includes("/college") ? "active" : ""
            }`}
          >
            <li>Le collège</li>
          </NavLink>
          <NavLink to="/" className={`nav-link ${isActive ? "active" : ""}`}>
            <li>L'établissement</li>
          </NavLink>
        </ul>
      </div>
      <div className="footer-content">
        <div className="secondary-nav">
          <ul>
            <NavLink
              to="/ecole/presentation"
              className="nav-link"
              activeclassname="active"
            >
              <li>L'école</li>
            </NavLink>
            <NavLink
              to="/college/presentation"
              className="nav-link"
              activeclassname="active"
            >
              <li>Le collège</li>
            </NavLink>
            <NavLink to="/blog" className="nav-link" activeclassname="active">
              <li>Le blog</li>
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link"
              activeclassname="active"
            >
              <li>Contactez-nous</li>
            </NavLink>
            <NavLink
              to="/parents"
              className="nav-link"
              activeclassname="active"
            >
              <li>Parents d'élèves</li>
            </NavLink>
          </ul>
        </div>
        <div className="footer-contact">
          <p>lenvoldespapillons@gmail.com</p>
          <p>06 01 44 17 72</p>
          <div className="socials-logo">
            <p>insta</p>
            <p>facebook</p>
          </div>
        </div>
      </div>
      <div className="under-footer">
        <NavLink to="/cgu" className="nav-link">
          <li>CGU</li>
        </NavLink>
      </div>
    </footer>
  );
};

export default FooterGlobal;
