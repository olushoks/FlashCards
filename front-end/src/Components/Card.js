import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Card = () => {
  const { currentCollection, cardCount, setCardCount } = useGlobalContext();

  const checkCardCount = (num) => {
    if (num > currentCollection.length - 1) {
      return 0;
    }
    if (num < 0) {
      return currentCollection.length - 1;
    }
    return num;
  };

  const previousCard = () => {
    setCardCount((cardCount) => {
      let currentCount = cardCount - 1;
      return checkCardCount(currentCount);
    });
  };
  const nextCard = () => {
    setCardCount((cardCount) => {
      let currentCount = cardCount + 1;
      return checkCardCount(currentCount);
    });
  };

  if (!currentCollection || currentCollection.length === 0) {
    return <h2>There are noo cards in this collection</h2>;
  }
  return (
    <>
      <div>There are {currentCollection.length} cards in this collection</div>
      <article>
        <div>
          <h5>
            {cardCount + 1} of {currentCollection.length}
          </h5>
        </div>
        <button className="btn" onClick={previousCard}>
          <GrLinkPrevious />
        </button>
        <p>{currentCollection[cardCount].question}</p>
        <button className="btn" onClick={nextCard}>
          <GrLinkNext />
        </button>
      </article>
    </>
  );
};

export default Card;
