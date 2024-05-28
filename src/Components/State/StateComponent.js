import React from "react";
import Stateless from "./Stateless";
import Stateful from "./Stateful";
import Toggle from "./Toggle/Toggle";
import Game from "./game_XorO/Game";

const StateComponent = () => {
  return (
    <div>
      <hr />
      <h1>State</h1>
      <Toggle />
      <div>
        <Stateless />
      </div>
      <div>
        <Stateful />
      </div>
      {/* GAME Tictacte */}
      <Game />
      <hr />
    </div>
  );
};

export default StateComponent;
