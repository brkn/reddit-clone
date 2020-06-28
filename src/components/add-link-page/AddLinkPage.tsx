import "./AddLinkPage.scss";

import React, { useContext } from "react";

import { ReturnToListLink } from "../return-to-list-link/ReturnToListLink";
import { AppContext } from "../../store/context";
import { Types } from "../../store/reducers";

export function AddLinkPage() {
  /* const { dispatch } = useContext(AppContext); */

  return (
    <main className={"add-link-page"}>
      <ReturnToListLink />
      <form>{"fixme"}
      </form>
    </main>
  );
}
