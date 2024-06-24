import React, { useContext } from "react";
import { CountContext } from "./CountContext";

const Counter = () => {
  const { count, setCount } = useContext(CountContext);
  //   console.log("count", count);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
