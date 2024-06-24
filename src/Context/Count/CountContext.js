import React, { createContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = (props) => {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
};
