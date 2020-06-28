import React from "react";
import {
  render, RenderResult
} from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { ReturnToListLink } from "./ReturnToListLink";

let utils: RenderResult;

describe("ReturnToListLink", () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    utils = render(
      <Router history={history}>
        <ReturnToListLink />
      </Router>
    );
  });

  test("should render a button as the wrapper element", () => {
    const { container } = utils;

    const wrapperButton = container.firstElementChild;

    expect(wrapperButton).toBeInTheDocument();
    expect(wrapperButton).toHaveAttribute("href", "/");
  });

  test("TODO check if the link redirects corectly", () => {
    expect(1).toBe(1);
  });
});
