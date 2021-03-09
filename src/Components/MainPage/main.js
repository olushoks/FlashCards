import React, { Component } from "react";
import WelcomePage from "../WelcomePage/welcome";
import "./main.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      display: "",
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleClick = () => {
    if (!this.state.name) {
      alert(`You must enter a name to continue`);
    } else {
      alert(`You Clicked Me. My name is ${this.state.name}`);
      this.setState({ display: "hide" });
    }
  };

  main = (
    <div>
      <p>Great to have you here</p>
      <p>What would you like to do</p>
      <button>View Collections</button>
      <button>Create A Collection</button>
    </div>
  );

  render() {
    return (
      <div>
        <WelcomePage
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          display={this.state.display}
        />
        {}
      </div>
    );
  }
}

export default MainPage;
