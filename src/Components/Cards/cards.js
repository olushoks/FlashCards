import React from "react";
import "./cards.css";

function DisplayCards(props) {
  const cardsInCollection = props.cardsInCollection;
  const currentCollection = props.currentCollection;
  let cardCount;
  let currentCard = 0;
  let cardToRender;

  const previousCard = () => {
    console.log(`Go to Previous`);
  };

  const nextCard = () => {
    console.log(`Go to Next`);
  };

  if (!cardsInCollection) {
    return null;
  }

  if (cardsInCollection.length === 0) {
    cardToRender = (
      <div>There are no cards in {currentCollection.title} Collection</div>
    );
  }

  if (cardsInCollection.length) {
    cardCount = cardsInCollection.length;
    cardToRender = (
      <div>
        <div>
          <h6>{`FlashCard ${currentCard + 1} of ${cardCount}`}</h6>
        </div>
        <h4>{`${currentCollection.title} Collection`}</h4>
        <div>
          <i className="fas fa-chevron-circle-left" onClick={previousCard}></i>
          <span>{cardsInCollection[currentCard].question}</span>
          <i className="fas fa-chevron-circle-right" onClick={nextCard}></i>
        </div>
      </div>
    );
  }
  return cardToRender;
}

export default DisplayCards;
