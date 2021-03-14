import React, { Component } from "react";
import "./viewCollections.css";
//import DisplayCards from "../Cards/cards";

class ShowCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: props.collections,
      activeCollection: null,
      cardsInActiveCollection: null,
      currentCard: 0,
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
          key={index + 1}
          onClick={() => this.getCardsInCollection(el)}
        >
          <i className="fas fa-plus-square icon"></i>
          <h3>{el.title}</h3>
          <div></div>
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
      let cardCount = this.state.cardsInActiveCollection.length;
      //let currentCard = 0;
      return (
        <div>
          <div>
            <h6>
              FlashCard {this.currentCard + 1} of {cardCount}
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
    let { currentCard } = this.state;
    currentCard--;
    console.log(`Go to Previous: ${currentCard}`);
    this.setState({ currentCard: currentCard-- });
  };

  // GO TO NEXT CARD
  nextCard = () => {
    let { currentCard } = this.state;
    currentCard++;
    console.log(`Go to Next: ${currentCard}`);
    this.setState({ currentCard: currentCard++ });
  };

  render() {
    return (
      <div>
        {this.displayCollections()}
        <div>{this.showCardsInCollection()}</div>
        {/* <DisplayCards
          cardsInCollection={this.state.cardsInActiveCollection}
          currentCollection={this.state.activeCollection}
          // cardDetails={this.state.cardDetails}
        /> */}
      </div>
    );
  }
}

// function ShowCollection(props) {
//   let cardsInCurrentCollection = [];

//   // GET CARDS SUB DOCUMENT IN CLICKED COLLECTION
//   const getCardsInCollection = (collection) => {
//     cardsInCurrentCollection = [];
//     // CHECK IF COLLECTION HAS CARDS SUBDOCUMENT
//     if (collection.cards.length === 0) {
//       return console.log(`There are no cards in ${collection.title}`);
//     }

//     // PUSH CARDS SUBDOCUMENT ARRAY INTO CARDSINCURRENTCOLLECTION ARRAY
//     cardsInCurrentCollection.push(collection.cards);
//     // DESTRUCTURE ARRAY
//     [cardsInCurrentCollection] = cardsInCurrentCollection;
//     console.log(cardsInCurrentCollection);
//     console.log(cardsInCurrentCollection.length);

//     // return cardsInCurrentCollection;
//   };

//   // const displayCards = () => {
//   //   if (!cardsInCurrentCollection || cardsInCurrentCollection.length === 0) {
//   //     return null;
//   //   } else {
//   //     return (
//   //       <div>
//   //         <DisplayCards cardsInCollection={cardsInCurrentCollection} />
//   //       </div>
//   //     );
//   //   }
//   //   // return cardsInCurrentCollection.length === 0 ? null : (
//   //   //   <div>
//   //   //     <DisplayCards cardsInCollection={cardsInCurrentCollection} />
//   //   //   </div>
//   //   // );
//   // };

//   // CHECK IF COLLECTIONS ARE IN DATABASE AND RETURN IF YES
//   const collections = props.collections;
//   if (collections.length === 0) {
//     return <div>No Collection Found</div>;
//   } else {
//     const collection = collections.map((el, index) => {
//       return (
//         <div
//           className="collection-display"
//           key={index + 1}
//           onClick={() => getCardsInCollection(el)}
//         >
//           <i className="fas fa-plus-square icon"></i>
//           <h3>{el.title}</h3>
//           <div></div>
//         </div>
//       );
//     });

//     return (
//       <div>
//         {collection}
//         <div>
//           <DisplayCards cardsInCollection={cardsInCurrentCollection} />
//         </div>
//       </div>
//     );
//   }
// }

export default ShowCollections;
