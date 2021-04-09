import React from "react";
import GameDescription from "./GameDescription";
import GameScore from "./GameScore";
import GameTitle from "./GameTitle";

function Header() {
  return (
    <header>
      <GameTitle title="Memory Game">
        <GameDescription />
      </GameTitle>
      <GameScore />
    </header>
  );
}

export default Header;
