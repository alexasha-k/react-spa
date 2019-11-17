import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = props => {
  const tabindex = props.mainPage ? "-1" : "0";

  return (
    <footer>
      <nav className="main-navigation">
        <div className="main-navigation__item">
          <span className="disabled"></span>
        </div>
        <div className="main-navigation__item">
          <span className="disabled"></span>
        </div>
      </nav>
      <nav className="footer-navigation">
        <NavLink
          to="/collection"
          exact
          activeClassName="disabled"
          tabIndex={tabindex}
        >
          see all
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
