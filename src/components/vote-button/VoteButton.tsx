import "./VoteButton.scss";

import React, { useContext } from "react";

import { AppContext } from "../../store/context";
import { Types } from "../../store/reducers";
import { ItemObject } from "../item/Item";

type VoteButtonProps = {
  type: "downvote" | "upvote";
  timestamp: ItemObject["timestamp"];
};

export function VoteButton({ type, timestamp }: VoteButtonProps) {
  const { dispatch } = useContext(AppContext);

  const handleOnClick = type === "upvote" ? handleUpvote : handleDownvote;
  const arrowUnicode = type === "upvote" ? "\u02C4" : "\u02C5";

  function handleUpvote() {
    dispatch({
      type: Types.Upvote,
      payload: {
        timestamp,
      },
    });
  }

  function handleDownvote() {
    dispatch({
      type: Types.Downvote,
      payload: {
        timestamp,
      },
    });
  }

  return (
    <button
      className={`vote-button ${type}`}
      type={"button"}
      onClick={handleOnClick}
    >
      {arrowUnicode}
      {type}
    </button>
  );
}
