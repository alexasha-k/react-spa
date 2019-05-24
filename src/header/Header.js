import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Agata Bielen</div>
      <nav className="header-navigation">
        <div className="header-navigation__item"><a href="#prev" className="disabled">previous</a></div>
        <div className="header-navigation__item"><a href="#next" className="disabled">next</a></div>
      </nav>
    </header>
  )
}

export default Header;
