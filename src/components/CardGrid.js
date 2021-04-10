import React, { useState, useEffect } from "react";
import Card from "./Card";

function CardGrid(props) {
  const [deck, setDeck] = useState([
    { url: "/assets/alluka_zoldyck.jpeg", id: "alluka-zoldyck" },
    { url: "/assets/chrollo_lucilfer.jpeg", id: "chrollo-lucilfer" },
    { url: "/assets/feitan_portor.jpeg", id: "feitan-portor" },
    { url: "/assets/ging_freecss.png", id: "ging-freecss" },
    { url: "/assets/gon_freecss.jpeg", id: "gon-freecss" },
    { url: "/assets/hisoka.jpeg", id: "hisoka" },
    { url: "/assets/illumi_zoldyck.png", id: "illumi-zoldyck" },
    { url: "/assets/issac_netero.png", id: "issac-netero" },
    { url: "/assets/killua_zoldyck.jpeg", id: "killua-zoldyck" },
    { url: "/assets/kite.jpeg", id: "kite" },
    { url: "/assets/leorio.png", id: "leorio" },
    { url: "/assets/meruem.jpeg", id: "meruem" },
  ]);
  const [score, setScore] = useState({ currentScore: 0, highScore: 0 });
  const [cardIds, setCardIds] = useState([]);

  const checkId = (id) => {
    if (cardIds.includes(id)) {
      console.log("game over");
      setCardIds([]);
      if (score.currentScore > score.highScore) {
        setScore({ ...score, highScore: score.currentScore });
      }
      setScore({ ...score, currentScore: 0 });
    } else {
      setCardIds((prev) => [...prev, id]);
      setScore({ ...score, currentScore: score.currentScore + 1 });
    }
    console.log(cardIds);
    console.log(score);
  };
  // componentDidMount
  useEffect(() => {
    console.log("useEffect- didmount");
    // setDeck((prev) => (prev = shuffleDeck(prev)));
    let cardGrid = document.querySelector("#card-grid");
    cardGrid.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.classList.contains("card")) {
        console.log(e.target);
        // checkId(e.target.id);
        setDeck((prev) => (prev = shuffleDeck(prev)));
      }
    });
  }, []);

  const shuffleDeck = (array) => {
    console.log("shuffling");
    let oldDeck = [...array];
    let freshDeck = [];
    while (freshDeck.length !== 12) {
      // pick number between 0 - oldDeck.length
      let num = Math.floor(Math.random() * oldDeck.length);
      let temp = oldDeck.splice(num, 1);
      if (temp[0] !== "undefined") {
        freshDeck.push(temp[0]);
      }
    }
    return freshDeck;
  };
  return (
    <>
      <div id="card-grid">
        {deck.map((obj, index) => {
          return <Card key={index} caption={obj.id} imgUrl={obj.url} />;
        })}
      </div>
    </>
  );
}

export default CardGrid;
