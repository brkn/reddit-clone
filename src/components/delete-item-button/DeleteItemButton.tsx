import "./DeleteItemButton.scss";

import React, { useContext } from "react";
import { ItemObject } from "../item/Item";

type DeleteItemButtonProps = {
  timestamp: ItemObject["timestamp"];
  isVissible: boolean;
};

export function DeleteItemButton({
  timestamp,
  isVissible,
}: DeleteItemButtonProps) {
  const openModal = undefined;

  if (!isVissible) {
    return null;
  }

  return (
    <button
      className={"delete-item-button"}
      type={"button"}
      onClick={openModal}
    >
      {"\u2717"}
    </button>
  );
}
