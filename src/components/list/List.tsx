import "./List.scss";

import React from "react";

import {
  ItemObject, Item
} from "../item/Item";

export const list: ItemObject[] = [
  {
    points: 3,
    url: "https://medium.com/commencis/stop-using-structs-e1be9a86376f",
    title: "first-title",
    timestamp: new Date().valueOf(),
  },
  {
    points: 8,
    url: "https://www.decathlon.com.tr/nh500-canta--id_8383599.html",
    title: "second-title",
    timestamp: new Date().valueOf() + 123,
  },
  {
    points: 5,
    url:
      "https://www.producthunt.com/posts/hey-62dbfc18-c745-4d86-9a5b-a23a1f4d9eb3",
    title: "third-title",
    timestamp: new Date().valueOf() + 345,
  },
];

export function List() {
  return (
    <ul className={"list-wrapper"}>
      {list.map((item, index) => (
        <Item
          key={`${index}-${item.title}`}
          item={item}
        />
      ))}
    </ul>
  );
}
