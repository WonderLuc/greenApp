import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import PointInfo from './Components/PointInfo/PointInfo';
import './style.scss';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <HashRouter>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/element">
          <PointInfo />
        </Route>
      </HashRouter>
    </>
  );
}
