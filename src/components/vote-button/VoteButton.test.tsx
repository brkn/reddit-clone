import React from "react";
import {
  render, RenderResult
} from "@testing-library/react";

import { VoteButton } from "./VoteButton";

let utils: RenderResult;

describe("VoteButton", () => {
  beforeEach(() => {
    utils = render(<VoteButton type="downvote" />);
  });

  test("should ", () => {
    expect(1).toBe(1);
  });
});
