import React, { Component } from "react";
import "./viewCollections.css";
import DisplayCards from "../Cards/cards";

class ShowCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: props.collections,
      activeCollection: {},
      // cardsInActiveCollection: [],
      noCardsMessage: "",
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
    // const { cardsInActiveCollection, activeCollection } = this.state;
    this.setState({
      activeCollection: clickedCollection,
      cardsInActiveCollection: clickedCollection.cards,
    });

    //CHECK IF COLLECTION HAS CARDS SUBDOCUMENT
    // if (cardsInActiveCollection.length === 0) {
    //   console.log(`There are no cards in ${activeCollection.title}`);
    //   this.setState({
    //     noCardsMessage: `There are no cards in ${activeCollection.title} Collection`,
    //   });
    // }
  };

  render() {
    return (
      <div>
        {this.displayCollections()}
        <div>
          <DisplayCards
            cardsInCollection={this.state.cardsInActiveCollection}
            currentCollection={this.state.activeCollection}
          />
        </div>
        <p>{this.state.noCardsMessage}</p>
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
