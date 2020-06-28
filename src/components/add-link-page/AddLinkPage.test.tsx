import React from "react";
import {
  render, fireEvent, RenderResult
} from "@testing-library/react";

import {
  MemoryHistory, createMemoryHistory
} from "history";
import { Router } from "react-router-dom";
import { AddLinkPage } from "./AddLinkPage";

let utils: RenderResult;
let history: MemoryHistory;

describe("AddLinkPage", () => {
  beforeEach(() => {
    history = createMemoryHistory();

    utils = render(
      <Router history={history}>
        <AddLinkPage />
      </Router>
    );
  });

  test("should render a main as the wrapper element", () => {
    const { container } = utils;
    const wrapperElement = container.firstElementChild;

    expect(wrapperElement).toBeInTheDocument();
    expect(wrapperElement?.tagName.toLowerCase()).toBe("main");
  });

  test("should render a header", () => {
    const { getByText } = utils;

    const headerTitle = getByText(/add new link/i);

    expect(headerTitle).toBeInTheDocument();
  });
});
