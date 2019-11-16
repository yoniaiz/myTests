import React, { Fragment } from "react";
import { Router, Route } from "react-router-dom";
import MainPage from "./MainPage/index";
import Weather from "./weather";
import Hooks from "./Hooks/Hooks";
import Clock from "./Clock";
import { urls } from "../constants";
import Header from "./Header/index";
import { history } from "../helpers/history";

export default function App(props) {
  return (
    <Fragment>
      <Router history={history}>
        <div>
          <Header />
          <Route exact path={`/`}>
            <MainPage />
          </Route>
          <Route exact path={`/${urls.WEATHER_PAGE}`}>
            <Weather />
          </Route>
          <Route exact path={`/${urls.HOOKS_PAGE}`}>
            <Hooks />
          </Route>
          <Route path={`/${urls.CLOCK_PAGE}`}>
            <Clock />
          </Route>
        </div>
      </Router>
    </Fragment>
  );
}
