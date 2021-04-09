import React, { useState } from "react";

function GameDescription() {
  const [show, setShow] = useState(false);
  return (
    <div id="game-description-div">
      <button onClick={() => setShow(true)}> ? </button>
      {show && (
        <span onClick={() => setShow(false)}>
          This application puts your memory to the test. You are presented with
          multiple images of manga characters. The images get shuffled
          every-time they are clicked. You CAN NOT click on any image more than
          once or else your score resets to zero. The main objective is to get
          the highest score as possible.
        </span>
      )}
    </div>
  );
}

export default GameDescription;
