import { ItemObject } from "../components/item/Item";

export const sortingOptions = [
  "Newest",
  "Most Voted (Z -> A)",
  "Least Voted (A -> Z)",
] as const;

export type SortingOptions = typeof sortingOptions[number];

export function sortItems(sortBy: SortingOptions, items: ItemObject[]) {
  switch (sortBy) {
    case "Newest": {
      return [...items.sort((itemA, itemB) => itemB.timestamp - itemA.timestamp)];
    }

    case "Most Voted (Z -> A)": {
      return [...items.sort((itemA, itemB) => itemB.points - itemA.points)];
    }

    case "Least Voted (A -> Z)": {
      return [...items.sort((itemA, itemB) => itemA.points - itemB.points)];
    }
    default:
      return [...items];
  }
}
