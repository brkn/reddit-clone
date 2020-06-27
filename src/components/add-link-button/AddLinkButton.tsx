import "./AddLinkButton.scss";

import React from "react";
import { Link } from "react-router-dom";

export function AddLinkButton() {
  return (
    <Link
      to="/add-link"
      className={"add-link-button"}
    >
      <p className={"add-link-button-icon"}>{"\u2795"}</p>
      <p className={"add-link-button-text"}>{"SUBMIT A LINK"}</p>
    </Link>
  );
}
