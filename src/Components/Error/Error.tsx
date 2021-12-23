import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

export default function Error(): JSX.Element {
  return (
    <main className="container error">
      <h1 className="error__title">Error 404</h1>
      <p className="error__subtitle">
        Ищете что-то интересное на нашем сайте? К сожалению, страница, которую Вы запрашиваете, не существует…
      </p>
      <NavLink to="/"><button className="error__button" type="button">Вернуться к карте</button></NavLink>
    </main>
  );
}
