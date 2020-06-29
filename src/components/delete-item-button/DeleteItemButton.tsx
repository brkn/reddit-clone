import "./DeleteItemButton.scss";

import React from "react";

type DeleteItemButtonProps = {
  isVissible: boolean;
  openModal: any;
};

export function DeleteItemButton({
  isVissible,
  openModal,
}: DeleteItemButtonProps) {
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
