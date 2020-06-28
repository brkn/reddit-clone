import { ItemObject } from "../components/item/Item";

type ActionTypeGenerator<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = "CREATE_ITEM",
  Delete = "DELETE_ITEM",
}

type ItemPayload = {
  [Types.Create]: Omit<ItemObject, "timestamp">;
  [Types.Delete]: {
    timestamp: number;
  };
};

export type ItemActions = ActionTypeGenerator<
  ItemPayload
>[keyof ActionTypeGenerator<ItemPayload>];

export const itemsReducer = (state: ItemObject[], action: ItemActions) => {
  switch (action.type) {
    case Types.Create: {
      const { points, url, title } = action.payload;
      const newItem: ItemObject = {
        points,
        url,
        title,
        timestamp: new Date().valueOf(),
      };

      return [
        ...state,
        newItem
      ];
    }
    case Types.Delete:
      return [...state.filter((item) => item.timestamp !== action.payload.timestamp)];
    default:
      return state;
  }
};
