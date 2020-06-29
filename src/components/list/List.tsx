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
};

export function List({ selectedSortingOption }: ListProps) {
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

  return (
    <ul className={"list-wrapper"}>
      {sortedItems.map((item, index) => (
        <Item
          key={`${index}-${item.title}`}
          item={item}
        />
      ))}
    </ul>
  );
}
