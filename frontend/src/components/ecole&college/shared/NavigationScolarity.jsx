import React from "react";
import { NavLink } from "react-router-dom";
import PapillonLogo from "../../shared/PapillonLogo";

const NavigationScolarity = ({ etablissement }) => {
  return (
    <nav className="nav-scolarity">
      <div className="nav-home">
        <PapillonLogo />
        <NavLink to="/" />
      </div>
      <div className="nav-links">
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

        <NavLink to="/contact" className="nav-link" activeClassName="active">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/blog" className="nav-link" activeClassName="active">
          <li>Blog</li>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationScolarity;
