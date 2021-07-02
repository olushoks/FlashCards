import React, { useState, useRef } from "react";
import { useGlobalContext } from "../context";
import { RiCloseCircleFill } from "react-icons/ri";

const CreateNewCollection = () => {
  const { user, setForm, addNewCollection } = useGlobalContext();
  const [title, setTitle] = useState("");
  const errorRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCollection = { title, createdBy: "jaden" };
    if (!title) {
      errorRef.current.innerText = "please enter the title";
      errorRef.current.classList.add("error");
      setTimeout(() => {
        errorRef.current.innerText = "";
      }, 2000);
      return;
    }
    addNewCollection(newCollection);
    setTitle("");
  };

  return (
    <div className="form-overlay">
      <form className="form-section">
        <div className="btn close-form" onClick={() => setForm(null)}>
          <RiCloseCircleFill />
        </div>
        <h3 className="form-title">Add New Collection</h3>
        <div className="form">
          <p className="form-alert" ref={errorRef}></p>
          <input
            className="input"
            name="new-collection"
            placeholder="Enter Collection Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>...created by: {user}</p>
          <button
            className="btn submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewCollection;
