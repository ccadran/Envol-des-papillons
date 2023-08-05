import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PapillonLogo from "../shared/PapillonLogo";

const NavigationParents = ({ etablissement }) => {
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
  const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);
  const toggleResponsiveNav = () => {
    setResponsiveNavOpen(!isResponsiveNavOpen);
  };
  useEffect(() => {
    if (isResponsiveNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isResponsiveNavOpen]);
  return (
    <nav className={className}>
      <div className={isResponsiveNavOpen ? "nav-home active" : "nav-home"}>
        <NavLink
          to="/etablissement/"
          className="home-link"
          activeClassName="active"
        >
          <PapillonLogo />
          <li>Acceuil</li>
        </NavLink>
      </div>
      <div className="nav-links">
        <ul>
          <NavLink
            to={`/parents/actualites`}
            className="nav-link"
            activeClassName="active"
          >
            <li>Actualités</li>
          </NavLink>
          <NavLink
            to={`/parents/evenements`}
            className="nav-link"
            activeClassName="active"
          >
            <li>Événements</li>
          </NavLink>
          <NavLink
            to={`/parents/menus`}
            className="nav-link"
            activeClassName="active"
          >
            <li>Menus</li>
          </NavLink>
          <NavLink
            to={`/parents/avis`}
            className="nav-link"
            activeClassName="active"
          >
            <li>Avis</li>
          </NavLink>
        </ul>
      </div>
      <div
        className={isResponsiveNavOpen ? "toggle-btn active" : "toggle-btn"}
        onClick={toggleResponsiveNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={
          isResponsiveNavOpen ? "responsive-nav active" : "responsive-nav"
        }
      >
        <ul>
          <NavLink
            to={`/parents/actualites`}
            className="nav-link"
            activeClassName="active"
          >
            <li>Actualités</li>
          </NavLink>
          <NavLink
            to={`/parents/evenements`}
            className="nav-link"
            activeClassName="active"
          >
            <li>Événements</li>
          </NavLink>
          <NavLink
            to={`/parents/menus`}
            className="nav-link"
            activeClassName="active"
          >
            <li>Menus</li>
          </NavLink>
          <NavLink
            to={`/parents/avis`}
            className="nav-link"
            activeClassName="active"
          >
            <li>Avis</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationParents;
