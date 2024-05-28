import React, { useState } from "react";
import Cell from "./Cell";

const Board = (props) => {
  const show = () => {
    const cells = [null, null, null, "X", "X", "X", null, null, null];
  };
  return (
    <div className="game-board">
      {props.cells.map((items, index) => (
        <Cell
          key={index}
          value={items}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
