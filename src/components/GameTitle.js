import React from "react";

function GameTitle({ title, children }) {
  return (
    <div id="game-title-div">
      <div id="game-logo-div">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Hunter_Association_logo.png`}
          alt="hunter x hunter logo"
        ></img>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default GameTitle;
