import React from "react";
import {
  render, RenderResult
} from "@testing-library/react";

import { List } from "./List";

let utils: RenderResult;

describe("List", () => {
  beforeEach(() => {
    utils = render(<List />);
  });

  test("should render an ul as the wrapper element", () => {
    const { container } = utils;

    const wrapperElement = container.firstElementChild;

    expect(wrapperElement).toBeInTheDocument();
    expect(wrapperElement?.tagName.toLowerCase()).toBe("ul");
  });

  test("should render the list of items passed", () => {
    const { container } = utils;

    const wrapperElement = container.firstElementChild;
    const firstItem = wrapperElement?.firstElementChild;

    expect(wrapperElement?.childElementCount).toBe(3);
    expect(
      firstItem?.getElementsByClassName("list-item-points-text")[0].innerHTML
    ).toBe("POINTS");
  });
});
