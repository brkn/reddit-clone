/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "./DeleteConfirmationModal.scss";

import React from "react";
import ReactModal from "react-modal";

import { ItemObject } from "../item/Item";

type DeleteConfirmationModalProps = {
  itemTitle: ItemObject["title"];
  isModalOpen: boolean;
  handleCloseModal: () => void;
  handleConfirmDelete: () => void;
};

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

export function DeleteConfirmationModal({
  itemTitle,
  isModalOpen,
  handleCloseModal,
  handleConfirmDelete,
}: DeleteConfirmationModalProps) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Delete confirmation dialog"
      className="delete-confirmation-modal"
    >
      <div className={"modal-header"}>
        <p className={"modal-header-title"}>{"Remove Link"}</p>
        <button
          className={"modal-header-close-button"}
          type={"button"}
          onClick={handleCloseModal}
        >
          {"X"}
        </button>
      </div>

      <div className={"modal-body"}>
        <p className={"modal-message"}>{"Do you want to remove:"}</p>
        <p className={"modal-item-title"}>{itemTitle}</p>
      </div>
      <div className={"modal-action-buttons-container"}>
        <button
          className={"modal-action-button confirm-button"}
          type="button"
          onClick={handleConfirmDelete}
        >
          {"OK"}
        </button>
        <button
          className={"modal-action-button cancel-button"}
          type="button"
          onClick={handleCloseModal}
        >
          {"CANCEL"}
        </button>
      </div>
    </ReactModal>
  );
}
