/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Header(): JSX.Element {
  const [isMenuOpen, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="navbar">
        <div className="navbar-Lpart">
          <img src="./public/Logo.png" alt="Logo" className="logo" />
          <h1 className="project-name">Eco-Mode</h1>
        </div>
        <div className="navbar-Rpart">
          <div
            className={`burger-menu ${isMenuOpen ? 'burger-menu_open' : ''}`}
            onClick={() => setOpenMenu(!isMenuOpen)}
          >
            <div className="burger-menu__line" />
            <div className="burger-menu__line" />
            <div className="burger-menu__line" />
          </div>
        </div>
      </div>
      <div className={`menu-zone ${isMenuOpen ? 'menu-zone_open' : ''}`}>
        <div className="menu">
          <ul className="nav-list">
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="nav-link_active"
                onClick={() => setOpenMenu(!isMenuOpen)}
              >
                <button className="menu-element" type="button">Карта</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/o-nas"
                className="nav-link"
                activeClassName="nav-link_active"
                onClick={() => setOpenMenu(!isMenuOpen)}
              >
                <button className="menu-element" type="button">О Нас</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
