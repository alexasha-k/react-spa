import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    const prev =
      this.props.currentCollection - 1 < 1
        ? 15
        : this.props.currentCollection - 1;
    const next =
      this.props.currentCollection + 1 > 15
        ? 1
        : this.props.currentCollection + 1;
    return (
      <header>
        <div className="logo">Agata Bielen</div>
        <nav className="header-navigation">
          <div className="header-navigation__item">
            <Link
              to={"/collection/" + prev + "/1"}
              className={this.props.mainPage ? "disabled" : ""}
            >
              previous
            </Link>
          </div>
          <div className="header-navigation__item">
            <Link
              to={"/collection/" + next + "/1"}
              className={this.props.mainPage ? "disabled" : ""}
            >
              next
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
