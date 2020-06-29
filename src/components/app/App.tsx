import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import {
  ToastContainer,
} from "react-toastify";

import { Header } from "../header/Header";
import { Homepage } from "../homepage/Homepage";
import { AppProvider } from "../../store/context";
import { AddLinkPage } from "../add-link-page/AddLinkPage";

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
          <Route
            exact
            path="/add-link"
            component={AddLinkPage}
          />
        </Switch>
      </BrowserRouter>

      <ToastContainer
        position={"top-center"}
        autoClose={100000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppProvider>
  );
}
