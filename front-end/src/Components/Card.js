import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Card = () => {
  const { currentCollection, cardCount, setCardCount } = useGlobalContext();
  console.log(currentCollection);

  if (!currentCollection || currentCollection.length === 0) {
    return <h2>There are noo cards in this collection</h2>;
  }
  return (
    <>
      <div>There are {currentCollection.length} cards in this collection</div>
      <article>
        <div>
          <h5>
            {cardCount} of {currentCollection.length}
          </h5>
        </div>
        <button className="btn" onClick={() => setCardCount(cardCount - 1)}>
          <GrLinkPrevious />
        </button>
        <p>{currentCollection[0].question}</p>
        <button className="btn" onClick={() => setCardCount(cardCount + 1)}>
          <GrLinkNext />
        </button>
      </article>
    </>
  );
};

export default Card;
