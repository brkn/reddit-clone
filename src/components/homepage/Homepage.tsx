import "./Homepage.scss";

import React from "react";

import { AddLinkButton } from "../add-link-button/AddLinkButton";

export function Homepage() {
  return (
    <main className={"homepage"}>
      <AddLinkButton />
    </main>
  );
}
