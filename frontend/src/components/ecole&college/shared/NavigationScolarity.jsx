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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > scrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, [scrollPosition]);

  return (
    <nav
      className={`${className} ${scrollDirection === "down" ? "hide" : "show"}`}
    >
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
      <div
        className={isResponsiveNavOpen ? "nav-links responsive" : "nav-links"}
      >
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
      <div
        className={isResponsiveNavOpen ? "toggle-btn active" : "toggle-btn"}
        onClick={toggleResponsiveNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavigationScolarity;
