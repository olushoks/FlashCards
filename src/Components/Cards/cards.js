import React from "react";
import "./cards.css";

function DisplayCards(props) {
  const cardsInCollection = props.cardsInCollection;
  const currentCollection = props.currentCollection;
  let cardCount;
  let currentCard = 0;
  let cardToRender;
  //let cardToRender = <p>Render React Render: {props.title}</p>;

  if (!cardsInCollection) {
    return null;
  }

  if (cardsInCollection.length === 0) {
    cardToRender = <div></div>;
  }

  if (cardsInCollection.length > 0) {
    cardCount = cardsInCollection.length;
    cardToRender = (
      <div>
        <div>
          <h6>{`FlashCard ${currentCard + 1} of ${cardCount}`}</h6>
        </div>
        <h4>{`${currentCollection.title} Collection`}</h4>
        <i className="fas fa-chevron-circle-left"></i>
        <p>{cardsInCollection[currentCard].question}</p>
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    );
  }
  return cardToRender;
}

export default DisplayCards;
