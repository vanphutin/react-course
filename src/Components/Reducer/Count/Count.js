import React, { useReducer, useState } from "react";
import Reducer from "../Reducer";

// useReducer
// 1. init state = 0
// 2. Actions : Up(state + 1) | Down(state - 1)
// 3. Reducer
// 4. dispatch

//=============================================

// 1. initState
const initState = 0;

// 2.Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// 3. Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("invalid action");
  }
};

const Count = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  const handleTang = () => {
    dispatch(UP_ACTION);
  };
  const handleGiam = () => {
    if (count === 0) return;
    dispatch(DOWN_ACTION);
  };
  return (
    <div>
      <button onClick={handleGiam}>Giam </button>
      <span>{count}</span>
      <button onClick={handleTang}> Tăng</button>
    </div>
  );
};

export default Count;
