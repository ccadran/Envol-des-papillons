import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PapillonLogo from "../shared/PapillonLogo";

const NavigationAdmin = () => {
  const [afterColor, setAfterColor] = useState("violet");
  const className = `nav ${afterColor}`;
  const location = useLocation();
  const isRootPath = location.pathname.includes("ecole");

  useEffect(() => {
    if (isRootPath) {
      setAfterColor("corail");
    } else if (location.pathname.includes("college")) {
      setAfterColor("blue");
    } else {
      setAfterColor("violet");
    }
  }, [isRootPath, location.pathname]);
  return (
    <nav className={className}>
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
            to="/admin/faq"
            className="nav-link"
            activeclassname="active"
          >
            <li>FAQ</li>
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
