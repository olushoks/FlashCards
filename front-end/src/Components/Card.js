import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";

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
    setQuestionOrAnswer("question");
    setCardCount((cardCount) => {
      let currentCount = cardCount - 1;
      return checkCardCount(currentCount);
    });
  };
  const nextCard = () => {
    setQuestionOrAnswer("question");
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
      <article className="card">
        <div className="card-header">
          <h5>
            card {cardCount + 1} of {currentCollection.length}
          </h5>
          <button className="btn" onClick={() => console.log(`edit`)}>
            <RiEdit2Fill />
          </button>
          <button className="btn" onClick={() => console.log(`delete`)}>
            <RiDeleteBin5Fill />
          </button>
        </div>
        <button className="btn card-toggle-btn" onClick={previousCard}>
          <GrLinkPrevious />
        </button>
        <div className="question-card">
          {currentCollection[cardCount][questionOrAnswer]}
        </div>
        <button className="btn card-toggle-btn" onClick={nextCard}>
          <GrLinkNext />
        </button>
        <small
          ref={answerRef}
          className="btn show-hide-answer"
          onClick={hideOrShowAnswer}
        >
          show answer
        </small>
      </article>
    </>
  );
};

export default Card;
