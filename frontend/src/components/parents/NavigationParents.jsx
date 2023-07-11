import React from "react";
import { NavLink } from "react-router-dom";
import PapillonLogo from "../shared/PapillonLogo";

const NavigationParents = ({ etablissement }) => {
  return (
    <nav className="nav-parents">
      <div className="nav-home">
        <NavLink to="/etablissement">
          <PapillonLogo />
          <li>Acceuil</li>
        </NavLink>
      </div>
      <div className="nav-links">
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
    </nav>
  );
};

export default NavigationParents;
