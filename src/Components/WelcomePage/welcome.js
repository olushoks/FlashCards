import React from "react";
import "./welcome.css";

function WelcomePage(props) {
  return (
    <div className={props.display}>
      <h2>Flash Cardzzzzz</h2>
      <p>Enter your name to continue...</p>
      <input type="text" name="name" onChange={props.handleChange}></input>
      <input
        type="submit"
        value="Continue"
        name="name"
        onClick={props.handleClick}
      ></input>
    </div>
  );
}

export default WelcomePage;
