import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Main(): JSX.Element {
  return (
    <main>
      <nav>
        <h1>MAIN!</h1>
        <NavLink to="/element" className="nav-link" activeClassName="nav-link_active">Go to Point Info</NavLink>
      </nav>
    </main>
  );
}
