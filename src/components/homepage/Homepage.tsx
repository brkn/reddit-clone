import "./Homepage.scss";

import React, {
  useState, useContext
} from "react";
// @ts-ignore
import Pagination from "react-pagination-lite";

import { AddLinkButton } from "../add-link-button/AddLinkButton";
import { List } from "../list/List";
import { Dropdown } from "../dropdown/Dropdown";
import {
  SortingOptions, sortingOptions
} from "../../utils/sorting-utils";
import { AppContext } from "../../store/context";


export function Homepage() {
  const { state } = useContext(AppContext);
  const [
    selectedSortingOption,
    setSelectedSortingOption
  ] = useState("Newest" as SortingOptions);
  const [
    activePage,
    setActivePage
  ] = useState(1);

  return (
    <main className={"homepage"}>
      <AddLinkButton />
      <Dropdown
        selectedOption={selectedSortingOption}
        options={sortingOptions}
        handleSelect={setSelectedSortingOption}
      />
      <List
        selectedSortingOption={selectedSortingOption}
        activePage={activePage}
      />
      {(state.items.length > 5) && (
        <Pagination
          className={"pagination"}
          range={20}
          activePage={activePage}
          totalCount={state.items.length}
          itemsPerPage={5}
          onPaginate={(pageId: number) => {
            setActivePage(pageId);
          }}
        />
      )}
    </main>
  );
}
