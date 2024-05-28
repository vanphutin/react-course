import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.scss";
import { calculateWinner } from "./logic";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const win = calculateWinner(board);
  const handleClick = (index) => {
    const boardCoppy = [...board];
    if (win || boardCoppy[index]) {
      return;
    }
    boardCoppy[index] = xIsNext ? "X" : "O";
    setBoard(boardCoppy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick} />
      <h2>{win ? `Winner is ${win}` : ""}</h2>
      <button onClick={handleResetGame}>Reset game</button>
    </div>
  );
};

export default Game;
