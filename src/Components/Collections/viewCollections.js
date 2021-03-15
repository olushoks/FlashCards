import React, { Component } from "react";
import axios from "axios";
import "./viewCollections.css";
import AddCollection from "./addCollection";

class ShowCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: props.collections,
      activeCollection: null,
      cardsInActiveCollection: null,
      cardCount: null,
      currentCard: 0,
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
      } = this.state;

      return (
        <div className="card-section">
          <div className="card-edit-delete-section">
            <i
              className="fas fa-edit card-edit-delete-icon"
              onClick={this.editCard}
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
            <span>{cardsInActiveCollection[currentCard].question}</span>
            <i
              className="fas fa-chevron-circle-right next-button"
              onClick={this.nextCard}
            ></i>
          </div>
        </div>
      );
    }
  };

  // GO TO PREVIOUS CARD
  previousCard = () => {
    let { currentCard, cardCount } = this.state;
    if (currentCard >= 0) {
      currentCard--;
      this.setState({ currentCard: currentCard });
      console.log(`Go to Next: ${currentCard}`);
    }
    // if (currentCard === 1) {
    //   this.setState({ currentCard: cardCount });
    // }
  };

  // GO TO NEXT CARD
  nextCard = () => {
    let { currentCard, cardCount } = this.state;
    if (currentCard <= cardCount - 1) {
      currentCard++;
      this.setState({ currentCard: currentCard });
      console.log(`Go to Next: ${currentCard}`);
    }

    // if (currentCard === cardCount) {
    //   this.setState({ currentCard: 1 });
    // }
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
    const {
      activeCollection,
      cardsInActiveCollection,
      currentCard,
    } = this.state;

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
    const {
      activeCollection,
      cardsInActiveCollection,
      currentCard,
    } = this.state;

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

export default ShowCollections;
