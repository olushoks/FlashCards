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
      setTimeout(() => {
        errorRef.current.innerText = "";
      }, 2000);
      return;
    }
    addCard(newCard);
    setNewCard({ question: "", answer: "" });
  };

  return (
    <div className="form-section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="btn close-form" onClick={() => setForm(null)}>
          <RiCloseCircleFill />
        </div>
        <h3>Add Card</h3>
        <p ref={errorRef}></p>
        <label>Question:</label>
        <textarea
          className="input"
          rows="3"
          cols="30"
          name="question"
          value={newCard.question}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <label>Answer:</label>
        <textarea
          className="input"
          rows="3"
          cols="30"
          name="answer"
          value={newCard.answer}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button className="submit-btn" type="submit" value="Submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default AddCard;
