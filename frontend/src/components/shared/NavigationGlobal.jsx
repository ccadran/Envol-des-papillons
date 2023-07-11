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
    console.log(className);
  }, [isRootPath, location.pathname]);

  return (
    <nav className={className}>
      <div className="nav-home">
        <NavLink
          to="/etablissement"
          className="home-link"
          activeClassName="active-home"
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
          </NavLink>

          <NavLink
            to="/etablissement/contact"
            className="nav-link"
            activeClassName="active"
          >
            <li>Contactez-nous</li>
          </NavLink>
          <NavLink to="/parents" className="nav-link" activeClassName="active">
            <li>Parents d'élèves</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationGlobal;
