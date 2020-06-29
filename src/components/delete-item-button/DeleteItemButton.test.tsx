import React from "react";
import {
  render,
} from "@testing-library/react";

import { DeleteItemButton } from "./DeleteItemButton";
import { initialState } from "../../store/context";

const { timestamp } = initialState.items[0];

describe("DeleteItemButton", () => {
  test("should render a button as the wrapper element", () => {
    const { container } = render(
      <DeleteItemButton
        timestamp={timestamp}
        isVissible={true}
      />
    );
    const wrapperElement = container.firstElementChild;

    expect(wrapperElement).toBeInTheDocument();
    expect(wrapperElement?.tagName.toLowerCase()).toBe("button");
    expect(wrapperElement).toHaveAttribute("type", "button");
  });

  test("should render unicode plus icon and submit link text", () => {
    const { container } = render(
      <DeleteItemButton
        timestamp={timestamp}
        isVissible={true}
      />
    );
    const wrapperElement = container.firstElementChild;

    expect(wrapperElement?.textContent).toBe("\u2717");
  });
});
