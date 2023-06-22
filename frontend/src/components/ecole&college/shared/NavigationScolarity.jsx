import React from "react";
import { NavLink } from "react-router-dom";
import PapillonLogo from "../../shared/PapillonLogo";

const NavigationScolarity = ({ etablissement }) => {
  return (
    <nav className="nav-scolarity">
      <div className="nav-home">
        <NavLink to="/">
          <PapillonLogo />
          <li>Acceuil</li>
        </NavLink>
      </div>
      <div className="nav-links">
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
            to={`/${etablissement}/contact`}
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
    </nav>
  );
};

export default NavigationScolarity;
