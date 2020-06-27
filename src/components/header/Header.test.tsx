import React from "react";
import {
  render, RenderResult
} from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { Header } from "./Header";

let utils: RenderResult;

describe("Header", () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    utils = render(
      <Router history={history}>
        <Header />
      </Router>
    );
  });

  test("renders a header element as the wrapper", () => {
    const { container } = utils;

    const headerElement = container.firstElementChild;

    expect(headerElement).toBeInTheDocument();
    expect(headerElement?.tagName.toLowerCase()).toBe("header");
  });

  test("renders logo link with 'hepsiburada' as innerText", () => {
    const { getByText } = utils;

    const headerLogoNode = getByText(/hepsiburada/i);

    expect(headerLogoNode).toBeInTheDocument();
    expect(headerLogoNode.getAttribute("href")).toBe("/");
  });

  test("TODO check if the link redirects corectly", () => {
    expect(1).toBe(1);
  });
});
