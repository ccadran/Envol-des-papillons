import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PapillonLogo from "./PapillonLogo";
import "../../styles/settings.scss";
import "../../styles/shared/_navigationGlobal.scss";

const NavigationGlobal = () => {
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
  const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false); // Add this state
  const toggleResponsiveNav = () => {
    setResponsiveNavOpen(!isResponsiveNavOpen);
  };

  return (
    <nav className={className}>
      <div className="nav-home">
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
            to="/ecole/presentation"
            className="nav-link"
            activeClassName="active"
          >
            <li>L'école</li>
            {/* <div className="active-link"></div> */}
          </NavLink>
          <NavLink
            to="/college/presentation"
            className="nav-link"
            activeClassName="active"
          >
            <li>Le collège</li>
          </NavLink>
          <NavLink
            to="/etablissement/blog"
            className="nav-link"
            activeClassName="active"
          >
            <li>Le blog</li>
            <div className="active-link"></div>
          </NavLink>

          <NavLink
            to="/etablissement/contact"
            className="nav-link"
            activeClassName="active"
          >
            <li>Contactez-nous</li>
          </NavLink>
          <NavLink
            to="/parents/actualites"
            className="nav-link"
            activeClassName="active"
          >
            <li>Parents d'élèves</li>
          </NavLink>
        </ul>
      </div>
      <div className="toggle-btn" onClick={toggleResponsiveNav}>
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
            to="/ecole/presentation"
            className="nav-link"
            activeClassName="active"
          >
            <li>L'école</li>
            {/* <div className="active-link"></div> */}
          </NavLink>
          <NavLink
            to="/college/presentation"
            className="nav-link"
            activeClassName="active"
          >
            <li>Le collège</li>
          </NavLink>
          <NavLink
            to="/etablissement/blog"
            className="nav-link"
            activeClassName="active"
          >
            <li>Le blog</li>
            <div className="active-link"></div>
          </NavLink>

          <NavLink
            to="/etablissement/contact"
            className="nav-link"
            activeClassName="active"
          >
            <li>Contactez-nous</li>
          </NavLink>
          <NavLink
            to="/parents/actualites"
            className="nav-link"
            activeClassName="active"
          >
            <li>Parents d'élèves</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationGlobal;
