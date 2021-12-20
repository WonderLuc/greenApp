import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function PointInfo(): JSX.Element {
  return (
    <main>
      <div className="PonInfo-zone">
        <div className="pointname-zone">
          <p className="point-name">Name of point</p>
          <p className="point-adress">Adress</p> 
        </div>
        <NavLink to="/map" className="nav-link" activeClassName="nav-link_active">
          <button className="tomap" type="button"><img className="Arrow1" src="./public/Arrow1.png" alt="Arrow" /> Карта</button>
        </NavLink>
        <div className="Info-zone">
          <p className="Worktime">Время работы<p className="Alltime">▼</p></p>
          <div className="materials">
            <p>Принимаемые материалы</p>
            <ul className="MatTake">
              <li>
                <p>Стекло</p>
              </li>
              <li>
                <p>Металл</p>
              </li>
              <li>
                <p>Бумага</p>
              </li>
              <li>
                <p>ПВХ</p>
              </li>
              <li>
                <p>Батарейки</p>
              </li>
            </ul>  
          </div>
          <form className="report">
            <div className="report-inputs">
              <label>Как ваше имя?</label>
              <input type="text" required placeholder="Вашe имя" />
              <label>Как вам эта точка?</label>
              <input type="text" required placeholder="Ваш отзыв..." />
            </div>
            <div className="stars">
              <img className="ScaleStar" src="./public/Star1.png" alt="GoodStar" />
              <img className="ScaleStar" src="./public/Star1.png" alt="GoodStar" />
              <img className="ScaleStar" src="./public/Star1.png" alt="GoodStar" />
              <img className="ScaleStar" src="./public/Star1.png" alt="GoodStar" />
              <img className="ScaleStar" src="./public/Star2.png" alt="GoodStar" />
            </div>
            <div className="Sumbit-btn">
              <button>Оставить отзыв</button>
            </div>
          </form>
          <div className="Oldreports">
            <p className="ReportsResult"> Отзывы 4.5 <img className="Star" src="./public/Star1.png" alt="GoodStar" /></p>
            <p className="UserName"> User Name</p>
            <p className="Oldtext"> OpOpOpOpOp<img className="Arrow2" src="./public/Arrow3.png" alt="Arrow" /></p>
          </div>
          <button className="Allreports" type="button">Все отзывы</button>
        </div>
      </div>
    </main>
  );
}
