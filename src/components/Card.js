import React from "react";

function Card({ caption, imgUrl }) {
  const makeCaption = (string) => {
    let newCaption = string.split("-");
    newCaption = newCaption.join(" ");
    return newCaption.toUpperCase();
  };
  return (
    <div className="card" id={caption}>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="card-img"
      ></div>
      <div className="card-caption">
        <h3>{makeCaption(caption)}</h3>
      </div>
    </div>
  );
}

export default Card;
