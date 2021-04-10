import React, { Component } from "react";
import Card from "./Card";

export default class CardGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [
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
      ],
      currentScore: 0,
      highScore: 0,
      cardIds: [],
    };
    this.checkId = this.checkId.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
  }
  checkId(id) {
    console.log(`top id is ${id}`);
    if (this.state.cardIds.includes(id)) {
      this.setState({ cardIds: [] });
      if (this.state.currentScore > this.state.highScore) {
        this.setState({ highScore: this.state.currentScore });
      }
      this.setState({ currentScore: 0 });
      console.log("game over");
    } else {
      this.setState({
        cardIds: [...this.state.cardIds, id],
        currentScore: this.state.currentScore + 1,
      });
    }
    console.log(`bottom id is ${id}`);
  }
  shuffleDeck(array) {
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
  }
  //
  componentDidMount() {
    console.log("did mount");
    this.setState({ deck: this.shuffleDeck(this.state.deck) });
    const cards = document.querySelectorAll(".card");
    let cardsArray = Array.from(cards);
    cardsArray.forEach((card) => {
      card.addEventListener("click", (e) => {
        const cardContent = document.querySelectorAll(".card-content");
        cardContent.forEach((card) => {
          card.style.transform = "rotateY(180deg)";
        });
        setTimeout(() => {
          this.setState({ deck: this.shuffleDeck(this.state.deck) });
        }, 900);
        setTimeout(() => {
          cardContent.forEach((card) => {
            card.style.transform = "rotateY(0deg)";
          });
        }, 1100);
      });
    });
  }
  //
  componentDidUpdate() {
    console.log("did update");
    const currentScore = document.querySelector("#game-current-score");
    const highScore = document.querySelector("#game-high-score");
    highScore.innerText = this.state.highScore;
    currentScore.innerText = this.state.currentScore;
  }
  render() {
    return (
      <>
        <div id="card-grid">
          {this.state.deck.map((obj, index) => {
            return (
              <Card
                eventHandler={this.checkId}
                key={index}
                caption={obj.id}
                imgUrl={obj.url}
              />
            );
          })}
        </div>
      </>
    );
  }
}
