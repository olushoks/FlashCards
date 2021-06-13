import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Card = () => {
  const { currentCollection, cardCount, setCardCount } = useGlobalContext();
  const [questionOrAnswer, setQuestionOrAnswer] = useState("question");
  const answerRef = useRef("");

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

  const hideOrShowAnswer = () => {
    if (answerRef.current.innerText === "show answer") {
      answerRef.current.innerText = "hide answer";
      setQuestionOrAnswer("answer");
    } else if (answerRef.current.innerText === "hide answer") {
      answerRef.current.innerText = "show answer";
      setQuestionOrAnswer("question");
    }
  };

  if (!currentCollection || currentCollection.length === 0) {
    return <h2>There are noo cards in this collection</h2>;
  }
  return (
    <>
      <article>
        <div>
          <h5>
            {cardCount + 1} of {currentCollection.length}
          </h5>
        </div>
        <button className="btn" onClick={previousCard}>
          <GrLinkPrevious />
        </button>
        <span>{currentCollection[cardCount][questionOrAnswer]}</span>
        <button className="btn" onClick={nextCard}>
          <GrLinkNext />
        </button>
        <small ref={answerRef} className="btn" onClick={hideOrShowAnswer}>
          show answer
        </small>
      </article>
    </>
  );
};

export default Card;
