import "./App.scss";

import React from "react";
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import { Header } from "../header/Header";
import { Homepage } from "../homepage/Homepage";

export function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route
          exact
          path="/"
          component={Homepage}
        />
      </Switch>
    </BrowserRouter>
  );
}
