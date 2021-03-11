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
      collectionView: "",
      error: "",
      view: "",
    };
  }

  handleChange = (e) => {
    let name = e.target.value;
    name = name.trim();
    // Fine tune name provided to be Title Case
    this.setState({ name });
  };

  handleClick = () => {
    let { name } = this.state;
    if (!name) {
      this.setState({ error: "You must enter a name to continue" });
    } else {
      name = name[0].toUpperCase() + name.slice(1).toLowerCase();
      this.setState({ name, display: "hide", displayMain: "" });
    }
  };

  getCollections = async () => {
    await axios
      .get("http://localhost:5000/api/collections/")
      .then((response) => {
        const { data } = response;
        this.setState({
          view: "displayCollections",
          collections: data,
          displayMain: "hide",
          collectionView: "",
        });

        // console.log(this.state.view);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // CREATE NEW COLLECTION
  createCollection = () => {
    this.setState({
      view: "createCollection",
      displayMain: "hide",
      collectionView: "",
    });
    // console.log(this.state.view);
  };

  // DISPLAY VIEW
  displayView = () => {
    if (this.state.view === "displayCollections") {
      return (
        <div className={this.state.collectionView}>
          <ShowCollections collections={this.state.collections} />
          <div onClick={this.goBackButton}>
            <i className="fas fa-long-arrow-alt-left back">Go Back</i>
          </div>
        </div>
      );
    } else if (this.state.view === "createCollection") {
      return (
        <div className={this.state.collectionView}>
          <AddCollection />
          <i
            className="fas fa-long-arrow-alt-left back"
            onClick={this.goBackButton}
          >
            Go Back
          </i>
        </div>
      );
    }
  };

  showMain = () => {
    const style = `${this.state.displayMain} main container`;
    return (
      <div className={style}>
        <p>Great to have you here {this.state.name}</p>
        <p>What would you like to do?</p>
        <div>
          <button className="collection-btn" onClick={this.getCollections}>
            View Collections
          </button>
          <button className="collection-btn" onClick={this.createCollection}>
            Create A Collection
          </button>
        </div>
      </div>
    );
  };

  goBackButton = () => {
    this.setState({
      display: "hide",
      displayMain: "",
      collectionView: "hide",
      // view: "",
    });
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
