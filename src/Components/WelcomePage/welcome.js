import React from "react";
import "./welcome.css";

function WelcomePage(props) {
  return (
    <div>
      <h2>Flash Cardzzzzz</h2>
      <p>Enter your name to continue...</p>
      <input type="text" name="name" onChange={props.handleChange}></input>
      <input
        type="submit"
        value="Click"
        name="name"
        onClick={props.handleClick}
      ></input>
    </div>
  );
}

export default WelcomePage;
