import "./ReturnToListLink.scss";

import React from "react";
import { Link } from "react-router-dom";

export function ReturnToListLink() {
  return (
    <Link
      to="/"
      className={"return-to-list-link"}
    >
      <p className={"return-to-list-link-text"}>{"Return to List"}</p>
    </Link>
  );
}
