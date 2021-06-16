import React, { Component } from "react";
import { AiFillHome } from "react-icons/ai";
import Collection from "./Collection";

import { useGlobalContext } from "../context";

const Collections = () => {
  const { collections, setForm } = useGlobalContext();

  if (collections.length === 0) {
    <div>
      <div className="collection-header">
        <h2 className="collection-title">collections</h2>
        <button className="btn add-collection-btn">add new collection</button>
      </div>
      <p>there is no collection in the DB.</p>
    </div>;
  }

  return (
    <>
      <div>
        back to home
        <AiFillHome />
      </div>
      <div className="collections-div">
        <div className="collection-header">
          <h2 className="collection-title">collections</h2>
          <button
            className="btn add-collection-btn"
            onClick={() => setForm("add-collection")}
          >
            add new collection
          </button>
        </div>
        <section className="collections-section">
          {collections.map((collection) => {
            return <Collection key={collection._id} {...collection} />;
          })}
        </section>
      </div>
    </>
  );
};

// OLD CODE

class ShowCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: props.collections,
      activeCollection: null,
      cardsInActiveCollection: null,
      cardCount: null,
      currentCard: 0,
      questionOrAnswer: "question",
      showOrHideAnswer: "Show",
      form: "",
    };
  }

  render() {
    return (
      <div>
        {this.displayCollections()}
        {this.showCardsInCollection()}
        {this.state.form}
      </div>
    );
  }
}

export default Collections;
