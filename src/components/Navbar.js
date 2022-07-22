import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar">
    <div className="logo">
        <img src="../img/logo_dal.png" alt=""></img>
      </div>

      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <NavLink to="/" className="Home">
          <li>ACCUEIL</li>
        </NavLink>
        <NavLink to="/services" className="Services">
          <li>NOS SERVICES</li>
        </NavLink>
        <NavLink to="/rendezvous" className="Rendezvous">
          <li>PRENDRE RDV</li>
        </NavLink>
        <NavLink to="/about" className="About">
          <li>ABOUT</li>
        </NavLink>
        <NavLink to="/contact" className="Contact">
          <li>CONTACT</li>
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
