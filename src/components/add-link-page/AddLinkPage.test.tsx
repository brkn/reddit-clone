import React from "react";
import {
  render, RenderResult, fireEvent
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
    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });

    const submitButton = formElement.getElementsByTagName("button")[0];

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  test("should not call submit handler when inputs are empty", () => {
    const { container } = utils;
    const formElement = container.getElementsByTagName("form")[0];

    // TODO: fix this test
  });

  test("should update the value of the inputs when keys are send", () => {
    const { container } = utils;
    const formElement = container.getElementsByTagName("form")[0];
    const inputs = Array.from(formElement.getElementsByTagName("input"));

    inputs.forEach((input) => {
      fireEvent.change(input, { target: { value: "23" } });
      expect(input.value).toBe("23");
      fireEvent.change(input, { target: { value: "alskjdh" } });
      expect(input.value).toBe("alskjdh");
      fireEvent.change(input, { target: { value: "" } });
      expect(input.value).toBe("");
    });
  });

  test("should redirect to homepage when submitted", async () => {
    const { container } = utils;
    const formElement = container.getElementsByTagName("form")[0];
    const [
      nameInput,
      urlInput
    ] = Array.from(formElement.getElementsByTagName("input"));
    const submitButton = formElement.getElementsByTagName("button")[0];

    fireEvent.change(nameInput, { target: { value: "name" } });
    fireEvent.change(urlInput, { target: { value: "https://www.hepsiburada.com/" } });
    fireEvent.click(submitButton);

    expect(history.location.pathname).toEqual("/");
  });
});
