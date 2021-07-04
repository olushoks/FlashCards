import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { handleAlert } from "../helper";
import { RiCloseCircleFill } from "react-icons/ri";

const AddCard = () => {
  const { setForm, addCard, alert, setAlert } = useGlobalContext();
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
      handleAlert(setAlert, "you cannot submit empty value(s)", "error");
      return;
    } else {
      addCard(newCard);
      setNewCard({ question: "", answer: "" });
      handleAlert(setAlert, "card succesfully added", "success");
    }
  };

  return (
    <div className="form-overlay">
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="btn close-form" onClick={() => setForm(null)}>
          <RiCloseCircleFill />
        </div>
        <h3 className="form-title">Add Card</h3>
        <p className={`form-alert ${alert.type}`}>{alert.text}</p>
        <div className="form">
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
