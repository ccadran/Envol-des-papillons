import React from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import PapillonLogo from "./PapillonLogo";
import "styles/shared/_footerGlobal.scss";

const FooterGlobal = () => {
  const location = useLocation();
  const isActive =
    location.pathname === "/" || location.pathname.split("/").length === 2;

  return (
    <footer className="footer-global">
      <div className="main-nav">
        <ul>
          <NavLink to="/ecole/presentation">
            <PapillonLogo />
            <h5
              className={`nav-link ${
                location.pathname.includes("/ecole") ? "active" : ""
              }`}
            >
              L'école
            </h5>
          </NavLink>
          <NavLink to="/college/presentation">
            {" "}
            <PapillonLogo />
            <h5
              className={`nav-link ${
                location.pathname.includes("/college") ? "active" : ""
              }`}
            >
              Le collège
            </h5>
          </NavLink>
          <NavLink
            to="/etablissement"
            className={`nav-link ${
              location.pathname === "/etablissement" ? "active" : ""
            }`}
          >
            {" "}
            <PapillonLogo />
            <h5
              className={`nav-link ${
                location.pathname === "/etablissement" ? "active" : ""
              }`}
            >
              L'établissement
            </h5>
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
