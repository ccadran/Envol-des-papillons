import React from "react";
import { NavLink } from "react-router-dom";
import PapillonLogo from "../shared/PapillonLogo";

const NavigationAdmin = () => {
  return (
    <nav className="nav-admin">
      <div className="nav-home">
        <NavLink to="/etablissement">
          <PapillonLogo />
          <li>Acceuil</li>
        </NavLink>
      </div>
      <div className="nav-links">
        <ul>
          <NavLink
            to="/admin/dashboard"
            className="nav-link"
            activeclassname="active"
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            to="/admin/blog"
            className="nav-link"
            activeclassname="active"
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            to="/admin/actualites"
            className="nav-link"
            activeclassname="active"
          >
            <li>Actualités</li>
          </NavLink>
          <NavLink
            to="/admin/evenements"
            className="nav-link"
            activeclassname="active"
          >
            <li>Événements</li>
          </NavLink>
          <NavLink
            to="/admin/avis"
            className="nav-link"
            activeclassname="active"
          >
            <li>Avis</li>
          </NavLink>
          <NavLink
            to="/admin/teachers"
            className="nav-link"
            activeclassname="active"
          >
            <li>Professeurs</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationAdmin;
