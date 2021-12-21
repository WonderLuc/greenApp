/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function PointInfo(): JSX.Element {
  const [worktimeOpen, setWorktime] = useState(false);

  return (
    <main className="point">
      <article className="point-name">
        <h2 className="point-name__title">Переработки пункт малыш</h2>
        <h3 className="point-name__adress">Московая 20</h3>
      </article>
      <NavLink to="/" className="nav-link">
        <p className="nav-link_back">
          <i className="arrow arrow_left" />
          Карта
        </p>
      </NavLink>
      <article className="point-worktime">
        <h2 className="point-worktime__title">Время работы</h2>
        <section className="point-worktime__list" onClick={() => setWorktime(!worktimeOpen)}>
          <ul className={`worktime-list ${worktimeOpen ? 'worktime-list_open' : ''}`}>
            <li className="worktime-list__item">Вт: 10:00 - 22:00</li>
            <li className="worktime-list__item">Вт: 10:00 - 22:00</li>
            <li className="worktime-list__item">Вт: 10:00 - 22:00</li>
            <li className="worktime-list__item">Вт: 10:00 - 22:00</li>
            <li className="worktime-list__item">Вт: 10:00 - 22:00</li>
            <li className="worktime-list__item">Вт: 10:00 - 22:00</li>
            <li className="worktime-list__item">Вт: 10:00 - 22:00</li>
          </ul>
          <i className={`arrow ${worktimeOpen ? 'arrow_up' : 'arrow_down'}`} />
        </section>
      </article>
      <article className="materials">
        <h2 className="materials__title">Принимаемые материалы:</h2>
        <ul className="materials-list">
          <li className="materials-list__item">Стеклотара</li>
          <li className="materials-list__item">Стеклотара</li>
          <li className="materials-list__item">Стеклотара</li>
          <li className="materials-list__item">Стеклотара</li>
          <li className="materials-list__item">Стеклотара</li>
        </ul>
      </article>
      <article className="inwork">
        <h2 className="inwork__title">Отзывы</h2>
        <h2 className="inwork__message">В разработке</h2>
      </article>
    </main>
  );
}
