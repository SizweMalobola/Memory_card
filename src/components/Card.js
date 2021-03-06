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
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + imgUrl})`,
            }}
            className="card-img"
          ></div>
          <div className="card-caption">
            <h3>{makeCaption(caption)}</h3>
          </div>
        </div>
        <div className="card-back">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Hunter_Association_logo.png`}
            alt="hunter x hunter logo"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
