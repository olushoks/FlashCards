import React, { Component } from "react";
import WelcomePage from "../WelcomePage/welcome";
import "./main.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      display: "",
      displayMain: "hide",
      error: "",
    };
  }

  handleChange = (e) => {
    let name = e.target.value;
    // Fine tune name provided to be Title Case
    name = name[0].toUpperCase() + name.slice(1).toLowerCase().trim();
    this.setState({ name });
  };

  handleClick = () => {
    if (!this.state.name) {
      this.setState({ error: "You must enter a name to continue" });
    } else {
      // alert(`You Clicked Me. My name is ${this.state.name}`);
      this.setState({ display: "hide", displayMain: "" });
    }
  };

  showMain = () => {
    return (
      <div className={this.state.displayMain}>
        <p>Great to have you here {this.state.name}</p>
        <p>What would you like to do</p>
        <div>
          <button>View Collections</button>
          <button>Create A Collection</button>
        </div>
        <i className="fas fa-long-arrow-alt-left back">Go Back</i>
      </div>
    );
  };

  render() {
    return (
      <div>
        <WelcomePage
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          display={this.state.display}
          errorMessage={this.state.error}
        />
        {this.showMain()}
      </div>
    );
  }
}

export default MainPage;
