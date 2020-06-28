import "./VoteButton.scss";

import React from "react";

type VoteButtonProps = {
  type: "downvote" | "upvote";
};

export function VoteButton({ type }: VoteButtonProps) {
  return <button type={"button"}>{type}</button>;
}
