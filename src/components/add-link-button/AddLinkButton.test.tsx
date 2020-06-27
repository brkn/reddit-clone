import React from "react";
import {
  render, RenderResult
} from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { AddLinkButton } from "./AddLinkButton";

let utils: RenderResult;

describe("AddLinkButton", () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    utils = render(
      <Router history={history}>
        <AddLinkButton />
      </Router>
    );
  });

  test("should render a button as the wrapper element", () => {
    const { container } = utils;

    const wrapperButton = container.firstElementChild;

    expect(wrapperButton).toBeInTheDocument();
    expect(wrapperButton?.getAttribute("href")).toBe("/add-link");
  });

  test("should render unicode plus icon and submit link text", () => {
    const { getByText } = utils;

    const iconElement = getByText("\u2795");
    const textElement = getByText("SUBMIT A LINK");

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test("TODO check if the link redirects corectly", () => {
    expect(1).toBe(1);
  });
});
