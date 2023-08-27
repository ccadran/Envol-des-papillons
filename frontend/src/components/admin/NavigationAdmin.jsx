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
  const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false); // Add this state
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
        {" "}
        <NavLink to="/etablissement">
          <PapillonLogo />
          <li>Acceuil</li>
        </NavLink>
      </div>
      <div
        className={isResponsiveNavOpen ? "nav-links responsive" : "nav-links"}
      >
        <ul>
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
          <NavLink
            to="/admin/mails"
            className="nav-link"
            activeclassname="active"
          >
            <li>Mails</li>
          </NavLink>
          <NavLink
            to="/admin/tags"
            className="nav-link"
            activeclassname="active"
          >
            <li>Tags</li>
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

export default NavigationAdmin;
