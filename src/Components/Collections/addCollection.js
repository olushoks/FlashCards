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
    const collectionId = props.collectionId;

    const handleChange = (e) => {
      e.preventDefault();
      newCard[e.target.name] = e.target.value;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      e.target.reset();

      let cardId;

      await axios
        .post("http://localhost:5000/api/cards", newCard)
        .then((res) => {
          const { data } = res;
          cardId = data._id;
          console.log(data);
          console.log(cardId);
          axios
            .post(
              `http://localhost:5000/api/collections/${collectionId}/cards/${cardId}`
            )
            .then((res) => console.log(res))
            .catch((err) => err);
        })
        .catch((err) => err);
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
