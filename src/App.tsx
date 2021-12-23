import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import PointInfo from './Components/PointInfo/PointInfo';
import './style.scss';
import Loader from './Components/Loader/Loader';
import About from './Components/About/About';

export default function App(): JSX.Element {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/element/:id">
            <PointInfo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
        <Loader />
      </HashRouter>
    </>
  );
}
