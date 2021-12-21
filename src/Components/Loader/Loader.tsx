import React from 'react';
import './style.scss';

export default function Loader(): JSX.Element {
  return (
    <div className="loader-zone">
      <div className="loader" />
    </div>
  );
}
