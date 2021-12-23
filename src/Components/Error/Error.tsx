import React from 'react';

import './style.scss';

export default function Error(): JSX.Element {
  return (
    <main>
      <h1>Error 404</h1>
      <p>Ищете что-то интересное на нашем сайте? К сожалению, страница, которую Вы запрашиваете, не существует…</p>
      <p>Пожалуйста перейдите по ссылке ниже, чотбы вернуться на главную страницу</p>
    </main>
  );
}
