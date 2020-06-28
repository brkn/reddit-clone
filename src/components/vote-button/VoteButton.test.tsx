import React from "react";
import {
  render, fireEvent
} from "@testing-library/react";

import { VoteButton } from "./VoteButton";
import {
  initialState
} from "../../store/context";
import { List } from "../list/List";

const { timestamp, points: initialPoints } = initialState.items[0];

describe("VoteButton", () => {
  test("should render a button as the wrapper element", () => {
    const { container } = render(
      <VoteButton
        type="downvote"
        timestamp={timestamp}
      />
    );
    const wrapperElement = container.firstElementChild;

    expect(wrapperElement).toBeInTheDocument();
    expect(wrapperElement?.tagName.toLowerCase()).toBe("button");
    expect(wrapperElement).toHaveAttribute("type", "button");
  });

  // TODO: Add tests for upvote and downvote handlers

  /* test("should handle upvoting", async () => {
    const { container, getAllByText } = render(<List />);
    const firstListItem = container.getElementsByClassName(
      "list-item"
    )[0];
    const renderedPoints = firstListItem.getElementsByClassName(
      "list-item-points-value"
    )[0];
    const upvoteButton = firstListItem.getElementsByClassName("upvote")[0];

    fireEvent.click(upvoteButton);

    console.log(renderedPoints?.outerHTML);

    expect(renderedPoints?.textContent).toBe(initialPoints + 1);

    fireEvent.click(upvoteButton);
    fireEvent.click(upvoteButton);
    fireEvent.click(upvoteButton);

    expect(renderedPoints?.textContent).toBe(initialPoints + 3);
  }); */
});
