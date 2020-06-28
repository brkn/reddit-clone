import React from "react";
import {
  render, RenderResult
} from "@testing-library/react";

import {
  Item, ItemObject
} from "./Item";

let utils: RenderResult;

const dummyItemObject: ItemObject = {
  points: 123,
  title: "dummy title",
  url: "https://www.google.com/",
  timestamp: new Date().valueOf(),
};

describe("Item", () => {
  test("should render a li as the wrapper element", () => {
    const { container } = render(<Item item={dummyItemObject} />);
    const wrapperElement = container.firstElementChild;

    expect(wrapperElement).toBeInTheDocument();
    expect(wrapperElement?.tagName.toLowerCase()).toBe("li");
  });

  describe("when passed points", () => {
    test("should render the regular points", () => {
      utils = render(<Item item={dummyItemObject} />);
      const { container } = utils;
      const wrapperElement = container.firstElementChild;

      const renderedPointsText = wrapperElement?.getElementsByClassName(
        "list-item-points"
      )[0].textContent;

      expect(renderedPointsText).toBe("123POINTS");
    });

    test("should render 0 points", () => {
      dummyItemObject.points = 0;
      utils = render(<Item item={dummyItemObject} />);
      const { container } = utils;
      const wrapperElement = container.firstElementChild;

      const renderedPointsText = wrapperElement?.getElementsByClassName(
        "list-item-points"
      )[0].textContent;

      expect(renderedPointsText).toBe("0POINTS");
    });
  });

  describe("link", () => {
    test("should be rendered with the correct href", () => {
      const { container } = render(<Item item={dummyItemObject} />);
      const wrapperElement = container.firstElementChild;
      const linkElement = wrapperElement?.getElementsByClassName(
        "list-item-link"
      )[0];

      expect(linkElement).toHaveAttribute("href", dummyItemObject.url);
    });

    test("should be opened in the new tab", () => {
      const { container } = render(<Item item={dummyItemObject} />);
      const wrapperElement = container.firstElementChild;
      const linkElement = wrapperElement?.getElementsByClassName(
        "list-item-link"
      )[0];

      expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
    });

    test("should render a title and url as text inside", () => {
      const { getByText } = render(<Item item={dummyItemObject} />);
      const linkTitleElement = getByText(dummyItemObject.title);
      const urlTextElement = getByText(dummyItemObject.url);

      expect(linkTitleElement).toBeInTheDocument();
      expect(urlTextElement).toBeInTheDocument();
    });
  });

  test("should render an upvote and downvote button", () => {
    const { container, getByText } = render(<Item item={dummyItemObject} />);
    const wrapperElement = container.getElementsByClassName(
      "list-item-vote-buttons"
    )[0];
    const upvoteButton = getByText("upvote");
    const downvoteButton = getByText("downvote");

    expect(wrapperElement.childElementCount).toBe(2);

    expect(upvoteButton).toBeInTheDocument();
    expect(upvoteButton.tagName.toLowerCase()).toBe("button");

    expect(downvoteButton).toBeInTheDocument();
    expect(upvoteButton.tagName.toLowerCase()).toBe("button");
  });
});
