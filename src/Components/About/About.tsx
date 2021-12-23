/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import './style.scss';

export default function About(): JSX.Element {
  return (
    <main className="container">
      <article className="about">
        <section className="about__we">
          <h2 className="we__title">Мы - студенты УФРУ, которые собрались дружной компанией поддержать состояние своего города</h2>
          <p className="we__subtitle">Этот проект призван привлечь всеобщее внимание к экологии и побудить заботливо обходиться с нашим общим домом, прикладывая к этому небольшие усилия.</p>
        </section>
        <section className="about__problem">
          <h3 className="problem__title">Вот лишь небольшая часть проблем, с которыми мы сталкиваемся</h3>
          <ul className="problem__list">
            <li className="problem__list-item">Колличество мусора от возрозшего числа продуктов растет</li>
            <li className="problem__list-item">Прошлый мусор свозиться разлагаться на свалки, что займет десятилетия</li>
            <li className="problem__list-item">Возрастает цена на услуги утилизации мусора</li>
            <li className="problem__list-item">Появляются "стихийные" свалки</li>
            <li className="problem__list-item">Производители покупают используют новое сырье, что удоражает итоговый продукт</li>
          </ul>
        </section>
        <section className="about__attention">
          <h2 className="attention__title">Ты можешь нам помочь!</h2>
        </section>
        <section className="about__answer">
          <h3 className="answer__title">Используй приложение и помогай своему дому:</h3>
          <ol className="answer__list">
            <li className="answer__list-item">Собери и рассортируй мусор</li>
            <li className="answer__list-item">Открой карту</li>
            <li className="answer__list-item">Выбери удобную тебе точку</li>
            <li className="answer__list-item">Сдай мусор</li>
            <li className="answer__list-item">Расскажи другим</li>
          </ol>
        </section>
        <section className="exclude">
          <h2>Помоги нам и дальше быть лучше!</h2>
          <p>Просто нажми и освободи нас от проблем, мешающим сосредоточиться на проекте</p>
          <button type="button">Отчислить лодырей</button>
        </section>
      </article>
    </main>
  );
}
