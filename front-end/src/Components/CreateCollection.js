import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { handleAlert } from "../helper";
import { RiCloseCircleFill } from "react-icons/ri";

const CreateNewCollection = () => {
  const { user, setForm, addNewCollection, alert, setAlert } =
    useGlobalContext();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCollection = { title, createdBy: "jaden" };
    if (!title) {
      handleAlert(setAlert, "please enter collection title", "error");
      return;
    } else {
      addNewCollection(newCollection);
      setTitle("");
    }
  };

  return (
    <div className="form-overlay">
      <form className="form-section">
        <div className="btn close-form" onClick={() => setForm(null)}>
          <RiCloseCircleFill />
        </div>
        <h3 className="form-title">Add New Collection</h3>
        <p className={`form alert ${alert.type}`}>{alert.text}</p>
        <div className="form">
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
