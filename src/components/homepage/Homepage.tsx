import "./Homepage.scss";

import React, { useState } from "react";

import { AddLinkButton } from "../add-link-button/AddLinkButton";
import { List } from "../list/List";
import { Dropdown } from "../dropdown/Dropdown";
import {
  SortingOptions, sortingOptions
} from "../../utils/sorting-utils";


export function Homepage() {
  const [
    selectedSortingOption,
    setSelectedSortingOption
  ] = useState("Newest" as SortingOptions);

  return (
    <main className={"homepage"}>
      <AddLinkButton />
      <Dropdown
        selectedOption={selectedSortingOption}
        options={sortingOptions}
        handleSelect={setSelectedSortingOption}
      />
      <List selectedSortingOption={selectedSortingOption}/>
    </main>
  );
}
