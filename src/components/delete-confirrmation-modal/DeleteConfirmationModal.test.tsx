import React from "react";
import { render } from "@testing-library/react";
import ReactModal from "react-modal";

import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { initialState } from "../../store/context";

ReactModal.setAppElement(document.createElement("div"));

const { timestamp } = initialState.items[0];


const mockedHandleCloseModal = jest.fn();

describe("DeleteConfirmationModal", () => {
  test("should render a header with close button", () => {
    const { container } = render(
      <DeleteConfirmationModal
        isModalOpen={true}
        handleCloseModal={mockedHandleCloseModal}
        handleConfirmDelete={mockedHandleCloseModal}
      />
    );

    console.log(container.outerHTML);

    const wrapperElement = container.getElementsByClassName("modal-header")[0];

    /* expect(wrapperElement).toBeInTheDocument(); */
  });
});
