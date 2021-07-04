import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";

const Card = () => {
  const { currentCollection, cardCount, setCardCount, deleteCard, setForm } =
    useGlobalContext();
  const [questionOrAnswer, setQuestionOrAnswer] = useState("question");
  const answerRef = useRef("");

  useEffect(() => {
    setQuestionOrAnswer("question");
  }, [currentCollection]);

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
    answerRef.current.innerText = "show answer";
    setCardCount((cardCount) => {
      let currentCount = cardCount - 1;
      return checkCardCount(currentCount);
    });
  };
  const nextCard = () => {
    setQuestionOrAnswer("question");
    answerRef.current.innerText = "show answer";
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
    return (
      <div className="card-container">
        <div className="card">
          <article className="front">
            <h2 className="question-card">
              There are no cards in this collection
            </h2>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="card-container">
      <div
        className={`card${questionOrAnswer === "answer" ? " card-flip" : ""}`}
      >
        <article
          className={`${questionOrAnswer === "question" ? "front" : "back"}`}
        >
          <div className="card-header">
            <h5>
              Card {cardCount + 1} of {currentCollection.length}
            </h5>
            <button
              className="btn edit-btn"
              onClick={() => setForm("edit-card")}
            >
              <RiEdit2Fill />
            </button>
            <button
              className="btn delete-btn"
              onClick={() => {
                deleteCard(currentCollection[cardCount]._id);
                // setCardCount((cardCount) => {
                //   // let currentCount = cardCount - 1;
                //   if (cardCount === currentCollection.length - 1) {
                //     return cardCount - 1;
                //   }
                //   return cardCount;
                // });
                // if (cardCount === currentCollection.length - 1) {
                //   setCardCount(cardCount - 1);
                // }
              }}
            >
              <RiDeleteBin2Line />
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
      </div>
    </div>
  );
};

export default Card;

// Is c++ same as c#?
// Can C++ be used for Backend?
