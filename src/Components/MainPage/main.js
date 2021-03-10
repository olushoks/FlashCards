import axios from "axios";
import React, { Component } from "react";
import WelcomePage from "../WelcomePage/welcome";
import "./main.css";
import viewCollections from "../Collections/viewCollections";
import addCollection from "../Collections/addCollection";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      display: "",
      displayMain: "hide",
      error: "",
      view: "",
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
      this.setState({ display: "hide", displayMain: "" });
    }
  };

  // // FETCH COLLECTIONS FROM API
  // async viewCollections() {
  //   this.setState({ view: "displayCollections" });
  //   await axios
  //     .get("http://localhost:5000/api/collections")
  //     .then((response) => {
  //       const { data } = response;
  //       console.log(response);
  //       console.log(data);
  //       console.log(data[0].title);
  //       console.log(this.state.view);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // FETCH COLLECTIONS FROM API
  getCollections = async () => {
    this.setState({ view: "displayCollections" });
    await axios
      .get("http://localhost:5000/api/collections")
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        console.log(data[0].title);
        console.log(this.state.view);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // CREATE NEW COLLECTION
  createCollection = () => {
    this.setState({ view: "createCollection" });
    console.log(this.state.view);
  };

  // DISPLAY VIEW
  displayView = () => {
    if (this.state.view === "displayCollections") {
      return viewCollections;
    } else if (this.state.view === "createCollection") {
      return addCollection;
    }
  };

  showMain = () => {
    return (
      <div className={this.state.displayMain}>
        <p>Great to have you here {this.state.name}</p>
        <p>What would you like to do</p>
        <div>
          <button onClick={this.getCollections}>View Collections</button>
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
        {this.state.view}
      </div>
    );
  }
}

export default MainPage;
