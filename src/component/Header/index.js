import React, { useState } from "react";
import { MainTitle } from "./MainTitle";
import { Navbar } from "./Navbar";
export default function(props) {
  const [mainRoute, setMainRoute] = useState(false);
  const routeToMain = bool => {
    setMainRoute(bool);
  };
  return (
    <header>
      <div className="container d-flex">
        <MainTitle routeToMain={routeToMain} />
        <Navbar main={mainRoute} routeToMain={routeToMain}/>
      </div>
    </header>
  );
}
