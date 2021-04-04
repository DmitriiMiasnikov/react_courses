import { useLocalObservable } from "mobx-react-lite";
import React, { createContext, useContext } from "react";
import { createTextStores } from "./store";

const textContext = createContext(null);

export const TextProvider = ({ children }) => {
  const textStore = useLocalObservable(createTextStores);
  return (
    <textContext.Provider value={textStore}>{children}</textContext.Provider>
  );
};

export const useTextStore = () => useContext(textContext);
