import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PapillonLogo from "../../shared/PapillonLogo";

const NavigationScolarity = ({ etablissement }) => {
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
          to="/etablissement/"
          className="home-link"
          activeclassname="active"
        >
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
          <NavLink
            to={`/${etablissement}/blog`}
            className="nav-link"
            activeclassname="active"
          >
            <li>Blog</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationScolarity;
