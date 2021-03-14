import axios from "axios";
import React from "react";
import "./addCollection.css";

function AddCollection(props) {
  // ADD COLLECTION FORM
  if (props.action === "Add New Collection") {
    let newCollection = {};
    const handleChange = (e) => {
      e.preventDefault();
      newCollection.title = e.target.value;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios
        .post("http://localhost:5000/api/collections", newCollection)
        .then()
        .catch();
    };
    return (
      <div>
        <form className="add-collect" onSubmit={handleSubmit}>
          <input
            className="input-form"
            name="new-collection"
            placeholder="Enter Collection Title"
            onChange={handleChange}
          ></input>
          <input className="submit-btn" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }

  // ADD NEW CARD SUBDOCUMENT TO CURRENT COLLECTION
  if (props.action === "Add Card to Collection") {
    let newCard = {};

    const handleChange = (e) => {
      e.preventDefault();
      newCard[e.target.name] = e.target.value;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(newCard);
      e.target.reset();
    };

    return (
      <div>
        <form className="add-collect" onSubmit={handleSubmit}>
          <label>Question:</label>
          <input
            className="input-form"
            placeholder="type the question here"
            name="question"
            onChange={handleChange}
          ></input>
          <label>Answer:</label>
          <input
            className="input-form"
            placeholder="type the answer here"
            name="answer"
            onChange={handleChange}
          ></input>
          <input className="submit-btn" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default AddCollection;
