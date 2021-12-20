import React from 'react';
import './style.scss';

export default function Header(): JSX.Element {
  return (
    <header className="navbar">
      <div>
        <img src="./Logo.png" alt="Logo" />
        <p>Logo</p>
      </div>
    </header>
  );
}
