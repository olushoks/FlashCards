import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { RiCloseCircleFill } from "react-icons/ri";

const EditCard = () => {
  const { currentCollection, cardCount, setForm, editCard } =
    useGlobalContext();
  const errorRef = useRef("");
  const [editedCard, setEditedCard] = useState({
    question: "",
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCard({ ...editedCard, [name]: value });
  };

  const handleSubmit = (e) => {
    const { question, answer } = editedCard;
    e.preventDefault();
    if (!question || !answer) {
      errorRef.current.innerText = "you cannot submit an empty value";
      errorRef.current.classList.add("error");
      setTimeout(() => {
        errorRef.current.innerText = "";
      }, 2000);
      return;
    }
    editCard(currentCollection[cardCount]._id, editedCard);
    setEditedCard({ question: "", answer: "" });
  };

  return (
    <div className="form-section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="btn close-form" onClick={() => setForm(null)}>
          <RiCloseCircleFill />
        </div>
        <h3>Edit Card</h3>
        <p ref={errorRef}></p>
        <textarea
          className="input"
          rows="3"
          cols="30"
          name="question"
          value={editedCard.question}
          placeholder="...enter the question here"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <textarea
          className="input"
          rows="3"
          cols="30"
          name="answer"
          value={editedCard.answer}
          placeholder="...enter the answer here"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button className="submit-btn" type="submit" value="Submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default EditCard;
