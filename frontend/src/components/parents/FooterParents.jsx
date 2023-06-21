import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import PapillonLogo from "../shared/PapillonLogo";

const FooterParents = ({ etablissement }) => {
  return (
    <footer className="footer-parents">
      <div className="main-nav">
        <ul>
          <Routes>
            <Route
              path="/"
              exact
              children={({ match }) => (
                <li className={match ? "active" : ""}>
                  <NavLink to="/" className="nav-link">
                    <PapillonLogo /> Acceuil
                  </NavLink>
                </li>
              )}
            />
            <Route
              path="/ecole"
              children={({ match }) => (
                <li className={match ? "active" : ""}>
                  <NavLink to="/ecole" className="nav-link">
                    <PapillonLogo /> École
                  </NavLink>
                </li>
              )}
            />
            <Route
              path="/college"
              children={({ match }) => (
                <li className={match ? "active" : ""}>
                  <NavLink to="/college" className="nav-link">
                    <PapillonLogo /> Collège
                  </NavLink>
                </li>
              )}
            />
          </Routes>
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

export default FooterParents;
