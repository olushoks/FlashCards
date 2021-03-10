import axios from "axios";
import React from "react";
import "./addCollection.css";

function AddCollection() {
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
      <form onSubmit={handleSubmit}>
        <input
          name="new-collection"
          placeholder="Enter Collection Title"
          onChange={handleChange}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default AddCollection;
