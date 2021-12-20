import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-Lpart">
          <img src="./public/Logo.png" alt="Logo" className="logo" />
          <p className="project-name">Eco-Mode</p>
        </div>
        <div className="navbar-Rpart">
          <img className="menu-btn" src="./public/BurgerMenu.png" alt="ButtonOfMenu" />
        </div>
      </div>
      <div className="menu-zone">
        <div className="menu">
          <ul className="nav-list">
            <li>
              <NavLink to="/element" className="nav-link" activeClassName="nav-link_active">
                <button className="menu-element" type="button">Личный Кабинет</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/map" className="nav-link" activeClassName="nav-link_active">
                <button className="menu-element" type="button">Карта</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/map" className="nav-link" activeClassName="nav-link_active">
                <button className="menu-element" type="button">О Нас</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
