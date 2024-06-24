import React, { useContext } from "react";
import { CountContext, CountProvider } from "./CountContext";
import Counter from "./Counter";
import Total from "./Total";

const Display = () => {
  return (
    <CountProvider>
      <div>
        <Counter />
        <Total />
      </div>
    </CountProvider>
  );
};

export default Display;
