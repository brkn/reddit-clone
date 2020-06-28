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
      className={type}
      type={"button"}
      onClick={handleOnClick}
    >
      {type}
    </button>
  );
}
