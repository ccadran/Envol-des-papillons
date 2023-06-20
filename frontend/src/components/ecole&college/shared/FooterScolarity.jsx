import React from "react";
import { NavLink, Route } from "react-router-dom";
import PapillonLogo from "../../shared/PapillonLogo";

const FooterScolarity = ({ etablissement }) => {
  return (
    <footer className="footer-scolarity">
      <div className="main-nav">
        <ul>
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
        </ul>
      </div>
      <div className="footer-content">
        <div className="secondary-nav">
          <ul>
            <NavLink
              to={`/${etablissement}/presentation`}
              className="nav-link"
              activeClassName="active"
            >
              <li>Présentation</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/pedagogie`}
              className="nav-link"
              activeClassName="active"
            >
              <li>Pédagogie</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/infos-pratiques`}
              className="nav-link"
              activeClassName="active"
            >
              <li>Infos pratiques</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/inscription`}
              className="nav-link"
              activeClassName="active"
            >
              <li>Inscription</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/FAQ`}
              className="nav-link"
              activeClassName="active"
            >
              <li>FAQ</li>
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              <li>Contact</li>
            </NavLink>
            <NavLink to="/blog" className="nav-link" activeClassName="active">
              <li>Blog</li>
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

export default FooterScolarity;
