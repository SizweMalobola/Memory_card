import React from "react";

function GameScore() {
  return (
    <div id="game-score-div">
      <h1>
        HighScore : <span id="game-high-score"></span>
      </h1>
      <h1>
        CurrentScore : <span id="game-current-score"></span>
      </h1>
    </div>
  );
}

export default GameScore;
