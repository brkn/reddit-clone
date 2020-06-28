import "./List.scss";

import React, { useContext } from "react";

import { Item } from "../item/Item";
import { AppContext } from "../../store/context";

export function List() {
  const { state } = useContext(AppContext);

  return (
    <ul className={"list-wrapper"}>
      {state.items.map((item, index) => (
        <Item
          key={`${index}-${item.title}`}
          item={item}
        />
      ))}
    </ul>
  );
}
