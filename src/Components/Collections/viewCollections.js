import React, { Component } from "react";
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
      currentCard: 1,
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
        <div
          className="collection-display"
          // onClick={() => this.getCardsInCollection(el)}
          key={index + 1}
        >
          <div>
            <i
              className="fas fa-plus-square icon"
              onClick={this.addCardForm}
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

  // ADD CARD TO COLLECTION FORM
  addCardForm = () => {
    // alert(`Clicked`);
    return <AddCollection action="Add Card to Collection" />;
  };

  // GET CARDS SUB DOCUMENT IN CLICKED COLLECTION
  getCardsInCollection = (clickedCollection) => {
    this.setState({
      activeCollection: clickedCollection,
      cardsInActiveCollection: clickedCollection.cards,
      cardCount: clickedCollection.cards.length,
      currentCard: 0,
    });

    console.log(this.state.activeCollection);
    console.log(this.state.cardsInActiveCollection);
  };

  // SHOW CARDS IN CURRENT COLLECTION
  showCardsInCollection = () => {
    if (!this.state.cardsInActiveCollection) {
      return null;
    }

    if (this.state.cardsInActiveCollection.length === 0) {
      return (
        <div>
          There are no cards in {this.state.activeCollection.title} Collection
        </div>
      );
    }

    if (this.state.cardsInActiveCollection.length > 0) {
      // let cardCount = this.state.cardsInActiveCollection.length;
      // this.setState({ cardCount });

      return (
        <div>
          <div>
            <h6>
              FlashCard {this.state.currentCard - 1} of {this.state.cardCount}
            </h6>
          </div>
          <h4>{this.state.activeCollection.title} Collection</h4>
          <div>
            <i
              className="fas fa-chevron-circle-left"
              onClick={this.previousCard}
            ></i>
            <span>
              {
                this.state.cardsInActiveCollection[this.state.currentCard]
                  .question
              }
            </span>
            <i
              className="fas fa-chevron-circle-right"
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
    currentCard--;
    this.setState({ currentCard: currentCard++ });
    console.log(`Go to Next: ${currentCard}`);
    if (currentCard === 1) {
      this.setState({ currentCard: cardCount });
    }
  };

  // GO TO NEXT CARD
  nextCard = () => {
    let { currentCard, cardCount } = this.state;
    currentCard++;
    this.setState({ currentCard: currentCard++ });

    console.log(`Go to Next: ${currentCard}`);

    if (currentCard === cardCount) {
      this.setState({ currentCard: 1 });
    }
  };

  render() {
    return (
      <div>
        {this.displayCollections()}
        {this.showCardsInCollection()}
        {this.addCardForm()}
      </div>
    );
  }
}

export default ShowCollections;
