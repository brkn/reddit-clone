import "./Homepage.scss";

import React from "react";

import { AddLinkButton } from "../add-link-button/AddLinkButton";
import { List } from "../list/List";

export function Homepage() {
  return (
    <main className={"homepage"}>
      <AddLinkButton />
      <List />
    </main>
  );
}
