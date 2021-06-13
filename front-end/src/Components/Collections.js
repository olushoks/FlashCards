import React, { Component } from "react";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import Collection from "./Collection";

import { useGlobalContext } from "../context";
import AddCollection from "./AddCollection";

const Collections = () => {
  const { collections } = useGlobalContext();

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
          <button className="btn add-collection-btn">add new collection</button>
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

  // CHECK IF COLLECTIONS ARE IN DATABASE AND RETURN IF YES
  displayCollections = () => {
    const { collections } = this.state;

    if (collections.length === 0) {
      return <div>No Collection Found</div>;
    }
    const collection = collections.map((el, index) => {
      return (
        <div className="collection-display" key={index + 1}>
          <div>
            <i
              className="fas fa-plus-square icon"
              onClick={() => this.addCardForm(el._id)}
            ></i>
          </div>
          <div onClick={() => this.getCardsInCollection(el)}>
            <h3>{el.title}</h3>
          </div>
        </div>
      );
    });
    return collection;
  };

  // GET CARDS SUB DOCUMENT IN CLICKED COLLECTION
  getCardsInCollection = (clickedCollection) => {
    this.setState({
      activeCollection: clickedCollection,
      cardsInActiveCollection: clickedCollection.cards,
      cardCount: clickedCollection.cards.length,
      currentCard: 0,
    });
  };

  // SHOW CARDS IN CURRENT COLLECTION
  showCardsInCollection = () => {
    // CARDS IS NULL WHEN COMPONENT MOUNTS, PREVENT FROM RENDERING
    if (!this.state.cardsInActiveCollection) {
      return null;
    }

    if (this.state.cardsInActiveCollection.length === 0) {
      return (
        <div className="no-cards-message">
          There are no cards in {this.state.activeCollection.title} Collection
        </div>
      );
    }

    // RENDER IF THERE ARE CARDS SUBDOCUMENT(S) IN THE COLLECTION
    if (this.state.cardsInActiveCollection.length > 0) {
      const {
        currentCard,
        cardCount,
        activeCollection,
        cardsInActiveCollection,
        questionOrAnswer,
        showOrHideAnswer,
      } = this.state;

      return (
        <div className="card-section">
          <div className="card-edit-delete-section">
            <i
              className="fas fa-edit card-edit-delete-icon"
              onClick={this.editCard}
              typeof="button"
            ></i>
            <i
              className="fas fa-trash-alt card-edit-delete-icon"
              onClick={this.deleteCard}
            ></i>
          </div>
          <div>
            <h6 className="card-count-indicator">
              FlashCard {currentCard + 1} of {cardCount}
            </h6>
          </div>
          <h4 className="collection-name">
            {activeCollection.title} Collection
          </h4>
          <div>
            <i
              className="fas fa-chevron-circle-left next-button"
              onClick={this.previousCard}
            ></i>
            <span>
              {cardsInActiveCollection[currentCard][questionOrAnswer]}
            </span>
            <i
              className="fas fa-chevron-circle-right next-button"
              onClick={this.nextCard}
            ></i>
            <div className="display-answer" onClick={this.showAnswer}>
              {showOrHideAnswer} Answer?
            </div>
          </div>
        </div>
      );
    }
  };

  // ADD CARD TO COLLECTION FORM
  addCardForm = (collectionId) => {
    console.log(collectionId);

    this.setState({
      form: (
        <div>
          <AddCollection
            action="Add Card to Collection"
            collectionId={collectionId}
          />
        </div>
      ),
    });
  };

  // EDIT CARD IN COLLECTION FORM
  editCard = () => {
    const { activeCollection, cardsInActiveCollection, currentCard } =
      this.state;

    this.setState({
      form: (
        <div>
          <AddCollection
            action="Edit Card in Collection"
            collectionId={activeCollection._id}
            cardId={cardsInActiveCollection[currentCard]._id}
          />
        </div>
      ),
    });
  };

  // DELETE CARD FROM COLLECTION
  deleteCard = async () => {
    const { activeCollection, cardsInActiveCollection, currentCard } =
      this.state;

    await axios
      .delete(
        `http://localhost:5000/api/collections/${activeCollection._id}/cards/${cardsInActiveCollection[currentCard]._id}`
      )
      .then()
      .catch((err) => err);

    console.log(
      `Active Collections ID: ${activeCollection._id} || Cuurent Card's ID:${cardsInActiveCollection[currentCard]._id} `
    );
  };

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
