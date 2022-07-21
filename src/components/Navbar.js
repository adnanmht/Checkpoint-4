import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar">
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <NavLink to="/" className="Home">
          <li>ACCUEIL</li>
        </NavLink>
        <NavLink to="/services" className="Services">
          <li>Nos Services</li>
        </NavLink>
        <NavLink to="/rendezvous" className="Rendezvous">
          <li>Prendre RDV</li>
        </NavLink>
        <NavLink to="/about" className="About">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact" className="Contact">
          <li>contact</li>
        </NavLink>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-itemes"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </div>
  );
};

export default Navbar;
