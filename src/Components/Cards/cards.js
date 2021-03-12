import React from "react";
import "./cards.css";

function DisplayCards(props) {
  const cardsInCollection = props.cardsInCollection;
  let cardCount = cardsInCollection.length;
  let currentCard = 0;

  return cardsInCollection.length === 0 ? null : (
    <div>
      <div>
        <h6>{`FlashCard ${currentCard + 1} of ${cardCount}`}</h6>
      </div>
      <h4>{`${cardsInCollection[currentCard].title} Collection`}</h4>
      <i class="fas fa-chevron-circle-left"></i>
      <p>{cardsInCollection[currentCard].question}</p>
      <i class="fas fa-chevron-circle-right"></i>
    </div>
  );
}

export default DisplayCards;
