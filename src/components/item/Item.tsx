import "./Item.scss";

import React, { useState } from "react";
import { VoteButton } from "../vote-button/VoteButton";
import { DeleteItemButton } from "../delete-item-button/DeleteItemButton";
import { DeleteConfirmationModal } from "../delete-confirrmation-modal/DeleteConfirmationModal";

export type ItemObject = {
  points: number;
  url: string;
  title: string;
  timestamp: number;
};

type ItemProps = {
  item: ItemObject;
};

export function Item({ item }: ItemProps) {
  const { points, url, title, timestamp } = item;
  const [
    isHovered,
    setIsHovered
  ] = useState(false);
  const [
    isModalOpen,
    setIsModalOpen
  ] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleConfirmDelete = () => {
    console.log(`${timestamp} is deleted`);
  };

  /* const urlText = getTrimmedUrlText(); */

  return (
    <li
      className={"list-item"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={"list-item-points"}>
        <p className={"list-item-points-value"}>{points}</p>
        <p className={"list-item-points-text"}>{"POINTS"}</p>
      </div>
      <div className={"list-item-details"}>
        <DeleteItemButton
          openModal={openModal}
          isVissible={isHovered}
        />

        <DeleteConfirmationModal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          handleConfirmDelete={handleConfirmDelete}
        />

        <a
          href={url}
          target={"_blank"}
          rel={"noopener noreferrer"}
          className={"list-item-link"}
        >
          <h2 className={"list-item-link-title"}>{title}</h2>
          <p className={"list-item-link-url-text"}>{url}</p>
        </a>

        <div className={"list-item-vote-buttons"}>
          <VoteButton
            type={"upvote"}
            timestamp={timestamp}
          />
          <VoteButton
            type={"downvote"}
            timestamp={timestamp}
          />
        </div>
      </div>
    </li>
  );
}

/* export function getTrimmedUrlText(url: string) {

}
 */
