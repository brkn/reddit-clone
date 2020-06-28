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
  Upvote = "UPVOTE_ITEM",
  Downvote = "DOWNVOTE_ITEM",
}

type ItemPayload = {
  [Types.Create]: Pick<ItemObject, "url" | "title">;
  [Types.Delete]: {
    timestamp: number;
  };
  [Types.Upvote]: {
    timestamp: number;
  };
  [Types.Downvote]: {
    timestamp: number;
  };
};

export type ItemActions = ActionTypeGenerator<
  ItemPayload
>[keyof ActionTypeGenerator<ItemPayload>];

export const itemsReducer = (state: ItemObject[], action: ItemActions) => {
  switch (action.type) {
    case Types.Create: {
      const { url, title } = action.payload;
      const newItem: ItemObject = {
        url,
        title,
        points: 1,
        timestamp: new Date().valueOf(),
      };

      return [
        ...state,
        newItem
      ];
    }

    case Types.Delete:
      return [...state.filter((item) => item.timestamp !== action.payload.timestamp)];

    case Types.Upvote: {
      const { timestamp } = action.payload;

      return [...state.map((item) => {
        if (item.timestamp !== timestamp) {
          return item;
        }
        const newItem: ItemObject = {
          ...item,
          points: item.points + 1,
        };

        return newItem;
      })];
    }

    case Types.Downvote: {
      const { timestamp } = action.payload;

      return [...state.map((item) => {
        if (item.timestamp !== timestamp) {
          return item;
        }
        const newItem: ItemObject = {
          ...item,
          points: item.points - 1,
        };

        return newItem;
      })];
    }

    default:
      return state;
  }
};
