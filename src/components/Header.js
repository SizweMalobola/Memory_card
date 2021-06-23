import React from "react";
import GameScore from "./GameScore";
import GameTitle from "./GameTitle";

function Header() {
  return (
    <header>
      <GameTitle title="Memory Game"></GameTitle>
      <GameScore />
    </header>
  );
}

export default Header;
