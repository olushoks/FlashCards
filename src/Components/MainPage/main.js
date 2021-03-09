import React from "react";
import WelcomePage from "../WelcomePage/welcome";
import "./main.css";

function MainPage() {
  let name;

  const handleChange = (e) => {
    name = e.target.value;
  };

  const handleClick = () => {
    alert(`You Clicked Me. My name is ${name}`);
  };
  const main = (
    <div>
      <p>Great to have you here {}</p>
      <p>What would you like to do</p>
      <button>View Collections</button>
      <button>Create A Collection</button>
    </div>
  );

  return (
    <div>
      <WelcomePage handleChange={handleChange} handleClick={handleClick} />
      {}
    </div>
  );
}

export default MainPage;
