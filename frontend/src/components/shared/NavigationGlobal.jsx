import React from "react";
import { NavLink } from "react-router-dom";
import PapillonLogo from "./PapillonLogo";
import "../../styles/settings.scss";
import "../../styles/shared/_navigationGlobal.scss";

const NavigationGlobal = () => {
  return (
    <nav className="nav-global">
      <div className="nav-home">
        <NavLink to="/etablissement">
          <PapillonLogo />
          <li>Acceuil</li>
        </NavLink>
      </div>
      <div className="nav-links">
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
          <NavLink
            to="/etablissement/blog"
            className="nav-link"
            activeclassname="active"
          >
            <li>Le blog</li>
          </NavLink>

          <NavLink
            to="/etablissement/contact"
            className="nav-link"
            activeclassname="active"
          >
            <li>Contactez-nous</li>
          </NavLink>
          <NavLink to="/parents" className="nav-link" activeclassname="active">
            <li>Parents d'élèves</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationGlobal;
