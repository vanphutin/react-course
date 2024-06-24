import React, { useContext } from "react";
import { CountContext } from "./CountContext";

const Total = () => {
  const { count } = useContext(CountContext);
  return <div>Total Producted is : {count}</div>;
};

export default Total;
