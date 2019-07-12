import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      <nav className="header-navigation">
        <div className="header-navigation__item">
          <a href="#prev" className="disabled">
            previous
          </a>
        </div>
        <div className="header-navigation__item">
          <a href="#next" className="disabled">
            next
          </a>
        </div>
      </nav>
      <nav className="footer-navigation">
        <NavLink to="/collection" exact activeClassName="disabled">
          see all
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
