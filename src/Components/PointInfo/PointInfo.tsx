import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function PointInfo(): JSX.Element {
  return (
    <main>
      <h1>INFO ABOUT YOUR POINT!</h1>
      <NavLink to="/element" className="nav-link" activeClassName="nav-link_active">Link that Active now!</NavLink>
      <NavLink exact to="/" className="nav-link" activeClassName="nav-link_active">Back to Main</NavLink>
    </main>
  );
}
