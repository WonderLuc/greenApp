import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PointInfo(): JSX.Element {
  return (
    <main>
      <h1>INFO ABOUT YOUR POINT!</h1>
      <NavLink exact to="/" className="nav-link" activeClassName="nav-link_active">Back to Main</NavLink>
    </main>
  );
}
