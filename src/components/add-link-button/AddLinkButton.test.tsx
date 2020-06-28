import React from "react";
import {
  render, RenderResult
} from "@testing-library/react";
import { Router } from "react-router-dom";
import {
  createMemoryHistory, MemoryHistory
} from "history";

import { fireEvent } from "@testing-library/dom";
import { AddLinkButton } from "./AddLinkButton";

let utils: RenderResult;
let history: MemoryHistory;

describe("AddLinkButton", () => {
  beforeEach(() => {
    history = createMemoryHistory();

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
    expect(wrapperButton).toHaveAttribute("href", "/add-link");
  });

  test("should render unicode plus icon and submit link text", () => {
    const { getByText } = utils;

    const iconElement = getByText("\u2795");
    const textElement = getByText("SUBMIT A LINK");

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test("should redirect to add link page when clicked", () => {
    const { container } = utils;
    const wrapperButton = container.firstElementChild;
    if (!wrapperButton) {
      throw new Error("Wrapper element was not found");
    }
    fireEvent.click(wrapperButton);

    expect(history.location.pathname).toEqual("/add-link");
  });
});
