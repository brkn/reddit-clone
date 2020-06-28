import React from "react";
import {
  render, RenderResult
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

  test("should render a form with 2 inputs and submit button", () => {
    const { container } = utils;
    const formElement = container.getElementsByTagName("form")[0];

    expect(formElement).toBeInTheDocument();

    const inputs = Array.from(formElement.getElementsByTagName("input"));

    expect(inputs.length).toBe(2);
    inputs.forEach((input) => { expect(input).toBeInTheDocument(); });

    const submitButton = formElement.getElementsByTagName("button")[0];

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});
