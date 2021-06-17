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
      setTimeout(() => {
        errorRef.current.innerText = "";
      }, 2000);
      return;
    }
    addNewCollection(newCollection);
    setTitle("");
  };

  return (
    <div className="form-section">
      <form className="form">
        <div className="btn close-form" onClick={() => setForm(null)}>
          <RiCloseCircleFill />
        </div>
        <h3>Add New Collection</h3>
        <p ref={errorRef}></p>
        <input
          className="input"
          name="new-collection"
          placeholder="Enter Collection Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className="input" value={user} readOnly />
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

// // ADD NEW CARD SUBDOCUMENT TO CURRENT COLLECTION
// if (props.action === "Add Card to Collection") {
//   let newCard = {};
//   const collectionId = props.collectionId;

//   const handleChange = (e) => {
//     e.preventDefault();
//     newCard[e.target.name] = e.target.value;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     e.target.reset();

//     let cardId;

//     await axios
//       .post("http://localhost:5000/api/cards", newCard)
//       .then((res) => {
//         const { data } = res;
//         cardId = data._id;
//         console.log(data);
//         console.log(cardId);
//         axios
//           .post(
//             `http://localhost:5000/api/collections/${collectionId}/cards/${cardId}`
//           )
//           .then((res) => console.log(res))
//           .catch((err) => err);
//       })
//       .catch((err) => err);
//   };

//   return (
//     <div>
//       <form className="add-collect" onSubmit={handleSubmit}>
//         <h3>Add Card To This Collection</h3>
//         <label>Question:</label>
//         <input
//           className="input-form"
//           placeholder="type the question here"
//           name="question"
//           onChange={handleChange}
//         ></input>
//         <label>Answer:</label>
//         <input
//           className="input-form"
//           placeholder="type the answer here"
//           name="answer"
//           onChange={handleChange}
//         ></input>
//         <input className="submit-btn" type="submit" value="Submit"></input>
//       </form>
//     </div>
//   );
// }


// }

export default CreateNewCollection;
