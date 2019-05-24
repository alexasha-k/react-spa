import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav className="header-navigation">
        <div className="header-navigation__item"><a href="#prev" className="disabled">previous</a></div>
        <div className="header-navigation__item"><a href="#next" className="disabled">next</a></div>
      </nav>
      <nav className="footer-navigation">
        <a href="#all" className="disabled">see all</a>
      </nav>
    </footer>
  )
}

export default Footer;
