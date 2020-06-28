import React from "react";
import {
  render, fireEvent
} from "@testing-library/react";

import { AddLinkPage } from "./AddLinkPage";

describe("AddLinkPage", () => {
  test("should render a form as the wrapper element", () => {
    const { container } = render(<AddLinkPage />);
    const wrapperElement = container.firstElementChild;

    expect(wrapperElement).toBeInTheDocument();
    expect(wrapperElement?.tagName.toLowerCase()).toBe("form");
  });
});
