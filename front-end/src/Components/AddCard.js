import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { RiCloseCircleFill } from "react-icons/ri";

const AddCard = () => {
  const { setForm, addCard } = useGlobalContext();
  const errorRef = useRef("");
  const [newCard, setNewCard] = useState({
    question: "",
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = (e) => {
    const { question, answer } = newCard;
    e.preventDefault();
    if (!question || !answer) {
      errorRef.current.innerText = "you cannot submit an empty value";
      errorRef.current.classList.add("error");
      setTimeout(() => {
        errorRef.current.innerText = "";
      }, 2000);
      return;
    }
    addCard(newCard);
    setNewCard({ question: "", answer: "" });
  };

  return (
    <div className="form-overlay">
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="btn close-form" onClick={() => setForm(null)}>
          <RiCloseCircleFill />
        </div>
        <h3 className="form-title">Add Card</h3>
        <div className="form">
          <p className="form-alert" ref={errorRef}></p>
          <div className="textarea-section">
            <textarea
              className="text-area"
              rows="3"
              cols="35"
              name="question"
              resize="none"
              value={newCard.question}
              placeholder="...enter the question here"
              onChange={(e) => handleChange(e)}
            ></textarea>

            <textarea
              className="text-area"
              rows="3"
              cols="35"
              name="answer"
              value={newCard.answer}
              placeholder="...enter the answer here"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button
              className="btn submit-btn center"
              type="submit"
              value="Submit"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCard;
