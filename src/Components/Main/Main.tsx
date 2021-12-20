import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Main(): JSX.Element {
  return (
    <main>
      <div className="main-zone">
        <div className="map">
          <img src="./public/image1.png" alt="map" />
        </div>
      </div>
    </main>
  );
}
