/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "./DeleteConfirmationModal.scss";

import React from "react";
import ReactModal from "react-modal";

type DeleteConfirmationModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  handleConfirmDelete: () => void;
};

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

export function DeleteConfirmationModal({
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
    </ReactModal>
  );
}
