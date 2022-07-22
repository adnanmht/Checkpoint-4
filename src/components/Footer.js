import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <NavLink className={"content"} to="/ Mentions légales">
          <p>
            {" "}
            Mentions légales | Pretection des données | CGV | Conditions des
            offres |
          </p>
        </NavLink>
        <NavLink className={"content"} to="/Contact">
          <p>
            {" "}
            Contact: 0695230882 mail: mahamatadnan@gmail.com| Plus d'information
          </p>
        </NavLink>
      </div>
    </div>
  );
};
export default Footer;
