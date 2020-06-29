import React, {
  createContext, useReducer, Dispatch
} from "react";

import {
  itemsReducer, ItemActions
} from "./reducers";
import { ItemObject } from "../components/item/Item";

type InitialStateType = {
  items: ItemObject[];
};

export const initialState: InitialStateType = {
  items: [
    {
      points: 3,
      url: "https://medium.com/commencis/stop-using-structs-e1be9a86376f",
      title: "first-title",
      timestamp: 1593411852582,
    },
    {
      points: 8,
      url: "https://www.decathlon.com.tr/nh500-canta--id_8383599.html",
      title: "second-title",
      timestamp: 1593411789732,
    },
    {
      points: 5,
      url:
        "https://www.producthunt.com/posts/hey-62dbfc18-c745-4d86-9a5b-a23a1f4d9eb3",
      title: "third-title",
      timestamp: 1593411770892,
    },
  ],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ItemActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ items }: InitialStateType, action: ItemActions) => ({
  items: itemsReducer(items, action),
});

export type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [
    state,
    dispatch
  ] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export {
  AppProvider, AppContext
};
