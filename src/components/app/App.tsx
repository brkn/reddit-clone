import "./App.scss";

import React from "react";
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";

import { Header } from "../header/Header";
import { Homepage } from "../homepage/Homepage";
import { AppProvider } from "../../store/context";

export function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}
