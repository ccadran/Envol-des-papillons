import React from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import PapillonLogo from "../../shared/PapillonLogo";
import "styles/shared/_footerGlobal.scss";

const FooterScolarity = ({ etablissement }) => {
  const location = useLocation();

  return (
    <footer className="footer-scolarity">
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
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            {" "}
            <PapillonLogo />
            <h5>L'établissement</h5>
          </NavLink>
        </ul>
      </div>
      <div className="footer-content">
        <div className="secondary-nav">
          <ul>
            <NavLink
              to={`/${etablissement}/presentation`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Présentation</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/pedagogie`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Pédagogie</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/infos-pratiques`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Infos pratiques</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/inscription`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Inscription</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/FAQ`}
              className="nav-link"
              activeclassname="active"
            >
              <li>FAQ</li>
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link"
              activeclassname="active"
            >
              <li>Contact</li>
            </NavLink>
            <NavLink to="/blog" className="nav-link" activeclassname="active">
              <li>Blog</li>
            </NavLink>
          </ul>
        </div>
        <div className="footer-contact">
          <p>lenvoldespapillons@gmail.com</p>
          <p>06 01 44 17 72</p>
          <div className="socials-logo">
            <Link to="https://www.instagram.com/">insta </Link>
            <Link to="https://www.facebook.com/">facebook </Link>
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
