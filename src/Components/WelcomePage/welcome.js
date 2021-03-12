import React from "react";
import "./welcome.css";

function WelcomePage(props) {
  const style = `${props.display} welcome container-sm container-md container-lg container-xl`;
  return (
    <div className={style}>
      <h2 className="welcome-text">Flash Card</h2>
      <div className="welcome-form">
        <p>Enter your name to continue</p>
        <input
          type="text"
          name="name"
          autoFocus
          onChange={props.handleChange}
        ></input>
        <p>{props.errorMessage}</p>
        <button
          className="form-btn"
          type="submit"
          name="name"
          onClick={props.handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
