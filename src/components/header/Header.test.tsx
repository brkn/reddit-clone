import React from "react";
import {
  render, screen
} from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { Header } from "./Header";

describe("Header", () => {
  test("renders a header element as the wrapper", () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    const headerElement = container.firstElementChild;

    expect(headerElement).toBeInTheDocument();
    expect(headerElement?.tagName.toLowerCase()).toBe("header");
  });

  test("renders logo link with 'hepsiburada' as innerText", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    const headerLogoNode = getByText(/hepsiburada/i);

    expect(headerLogoNode).toBeInTheDocument();
    expect(headerLogoNode.getAttribute("href")).toBe("/");
  });

  test("TODO check if the link redirects corectly", () => {
    expect(1).toBe(1);
  });
});
