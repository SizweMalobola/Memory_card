import React from "react";

function GameTitle({ title, children }) {
  return (
    <div id="game-title-div">
      <div id="game-logo-div">
        <img
          src="https://static.wikia.nocookie.net/hunterxhunter/images/0/05/Hunter_Association_logo.png/revision/latest?cb=20180405075402"
          alt="hunter x hunter logo"
        ></img>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}

export default GameTitle;
