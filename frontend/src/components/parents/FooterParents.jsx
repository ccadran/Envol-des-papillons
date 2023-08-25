import React from "react";
import { NavLink, Route, Routes, useLocation, Link } from "react-router-dom";
import PapillonLogo from "../shared/PapillonLogo";

const FooterParents = ({ etablissement }) => {
  const location = useLocation();
  const isActive =
    location.pathname === "/" || location.pathname.split("/").length === 2;

  return (
    <footer className="footer-parents">
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
            //
          >
            {" "}
            <PapillonLogo />
            <h5
              className={`nav-link ${
                location.pathname.includes("/etablissement") ? "active" : ""
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
              to={`/parents/actualites`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Actualités</li>
            </NavLink>
            <NavLink
              to={`/parents/evenements`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Événements</li>
            </NavLink>
            <NavLink
              to={`/parents/menus`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Menus</li>
            </NavLink>
            <NavLink
              to={`/parents/avis`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Avis</li>
            </NavLink>
          </ul>
        </div>
        <div className="footer-contact">
          <a href="mailto:contact@lenvoldespapillons33.com ">
            contact@lenvoldespapillons33.com
          </a>

          <a href="tel:+33 6 05 39 03 73">06 05 39 03 73</a>

          <div className="social-logos">
            <Link to="https://www.instagram.com/ecole.montessori_bordeaux/">
              <i class="fa-brands fa-instagram"></i>{" "}
            </Link>
            <Link to="https://www.facebook.com/lenvolBordeauxmetropole">
              <i class="fa-brands fa-facebook"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="under-footer">
        <NavLink to="/mentions-legales" className="nav-link">
          <li>Mentions légales</li>
        </NavLink>
      </div>
    </footer>
  );
};

export default FooterParents;
