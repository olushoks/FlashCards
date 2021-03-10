import axios from "axios";
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

  // VIEW COLLECTIONS
  async viewCollections() {
    alert(`Lets view all collections`);
    await axios
      .get("http://localhost:5000/api/collections")
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createCollection = () => {
    alert(`Lets create a collection`);
  };

  showMain = () => {
    return (
      <div className={this.state.displayMain}>
        <p>Great to have you here {this.state.name}</p>
        <p>What would you like to do</p>
        <div>
          <button onClick={this.viewCollections}>View Collections</button>
          <button onClick={this.createCollection}>Create A Collection</button>
        </div>
        <div onClick={this.goBackButton}>
          <i className="fas fa-long-arrow-alt-left back">Go Back</i>
        </div>
      </div>
    );
  };

  goBackButton = () => {
    this.setState({ display: "", displayMain: "hide" });
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
