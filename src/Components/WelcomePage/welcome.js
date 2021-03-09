import React from "react";
import "./welcome.css";

function WelcomePage(props) {
  return (
    <div className={props.display}>
      <h2>Flash Cardzzzzz</h2>
      <p>
        Enter your name to continue
        <input type="text" name="name" onChange={props.handleChange}></input>
      </p>
      <p>{props.errorMessage}</p>

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
