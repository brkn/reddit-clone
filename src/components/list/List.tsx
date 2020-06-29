import "./List.scss";

import React, {
  useContext, useState, useLayoutEffect
} from "react";

import { Item } from "../item/Item";
import { AppContext } from "../../store/context";
import {
  SortingOptions, sortItems
} from "../../utils/sorting-utils";

type ListProps = {
  selectedSortingOption: SortingOptions;
  activePage: number;
};

export function List({ selectedSortingOption, activePage }: ListProps) {
  const { state } = useContext(AppContext);
  const [
    sortedItems,
    setSortedItems
  ] = useState(state.items);

  useLayoutEffect(() => {
    const newSortedItems = sortItems(selectedSortingOption, state.items);
    setSortedItems(newSortedItems);
  }, [
    selectedSortingOption,
    state.items
  ]);

  const paginatedItems = sortedItems.slice(0 + (activePage - 1) * 5, 5 + (activePage - 1) * 5);

  return (
    <ul className={"list-wrapper"}>
      {paginatedItems.map((item, index) => (
        <Item
          key={`${index}-${item.title}`}
          item={item}
        />
      ))}
    </ul>
  );
}
