import React from "react";

function Card({ caption, imgUrl, eventHandler }) {
  const makeCaption = (string) => {
    let newCaption = string.split("-");
    newCaption = newCaption.join(" ");
    return newCaption.toUpperCase();
  };
  return (
    <div
      className="card"
      id={caption}
      onClick={(e) => {
        eventHandler(caption);
      }}
    >
      <div className="card-content">
        <div className="card-front">
          <div
            style={{ backgroundImage: `url(${imgUrl})` }}
            className="card-img"
          ></div>
          <div className="card-caption">
            <h3>{makeCaption(caption)}</h3>
          </div>
        </div>
        <div className="card-back">
          <img
            src="https://static.wikia.nocookie.net/hunterxhunter/images/0/05/Hunter_Association_logo.png/revision/latest?cb=20180405075402"
            alt="hunter x hunter logo"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
