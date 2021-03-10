import axios from "axios";
import React, { Component } from "react";
import WelcomePage from "../WelcomePage/welcome";
import "./main.css";
import ShowCollections from "../Collections/viewCollections";
import AddCollection from "../Collections/addCollection";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
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

  getCollections = async () => {
    await axios
      .get("http://localhost:5000/api/collections")
      .then((response) => {
        const { data } = response;
        this.setState({ view: "displayCollections", collections: data });

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
      return <ShowCollections collections={this.state.collections} />;
    } else if (this.state.view === "createCollection") {
      return <AddCollection />;
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
        {this.displayView()}
      </div>
    );
  }
}

export default MainPage;
