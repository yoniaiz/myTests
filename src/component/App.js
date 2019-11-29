import React, { Fragment } from "react";
import { Router, Route, Link } from "react-router-dom";
import MainPage from "./MainPage/index";
import Weather from "./weather";
import Hooks from "./Hooks/Hooks";
import Clock from "./Clock";
import { urls } from "../constants";
import Header from "./Header/index";
import { history } from "../helpers/history";
import { ButtonsDisplayPage } from "./CssProjects/ButtonsDisplayPage/index";
import Typography from "./CssProjects/Typography";
import { GameOfLife } from "./Games/GameOfLife";
import { ClippingImages } from "./CssProjects/ClippingImages";
import { topics } from "../constants/urls";
import GlobalStyle from "../styles/GlobalStyle";
// import { Tetris } from "./Games/Tetris";
import VideoPlayer from "./VideoPlayer";

const Topic = ({ match }) => {
  switch (match.params.topicId) {
    case "buttons":
      return <ButtonsDisplayPage />;
    case "typography":
      return <Typography />;
    case "gameOfLife":
      return <GameOfLife />;
    // case "tetris":
    //   return <Tetris />;
    default:
      return <ClippingImages />;
  }
};
const Games = () => {
  const gamesTopic = topics[1];
  return (
    <div className="container text-center main-container">
      <h1 className="main-title">{gamesTopic.name}</h1>
      <h3 className="sub-title">{gamesTopic.description}</h3>
      <div class="navigation-container topBotomBordersIn">
        {gamesTopic.resources.map(({ name, id }) => {
          return <Link to={`/${gamesTopic.id}/${id}`}>{name}</Link>;
        })}
      </div>
      <Route path={`/${gamesTopic.id}/:topicId`} component={Topic} />
    </div>
  );
};

const Css = () => {
  const cssTopic = topics[0];
  return (
    <div className="container text-center main-container">
      <h1 className="main-title">{cssTopic.name}</h1>
      <h3 className="sub-title">{cssTopic.description}</h3>
      <div class="navigation-container  brackets">
        {cssTopic.resources.map(({ name, id }) => {
          return <Link to={`/${cssTopic.id}/${id}`}>{name}</Link>;
        })}
      </div>
      <Route path={`/${cssTopic.id}/:topicId`} component={Topic} />
    </div>
  );
};
export default function App(props) {
  return (
    <Fragment>
      <Router history={history}>
        <div>
          <Header />
          <Route exact path={`/`}>
            <MainPage />
          </Route>
          <Route path={`/${topics[0].id}`}>
            <Css />
          </Route>
          <Route path={`/${topics[1].id}`}>
            <Games />
          </Route>
          <Route
            exact
            path={`/videoPlayer`}
            component={VideoPlayer}
          />
          <Route
            exact
            path={`/videoPlayer/:activeVideo`}
            component={VideoPlayer}
          />
        </div>
      </Router>
    </Fragment>
  );
}
