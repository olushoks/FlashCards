import React from "react";
import "./viewCollections.css";
import DisplayCards from "../Cards/cards";

function ShowCollections(props) {
  let cardsInCurrentCollection;

  // DISPLAY CARDS SUB DOCUMENTS IN CLICKED COLLECTION
  const getCardsInCollection = (collection) => {
    cardsInCurrentCollection = [];
    // CHECK IF COLLECTION HAS CARDS SUBDOCUMENT
    if (collection.cards.length === 0)
      return console.log(`There are no cards in ${collection.title}`);

    // PUSH CARDS SUBDOCUMENT ARRAY INTO CARDSINCURRENTCOLLECTION ARRAY
    cardsInCurrentCollection.push(collection.cards);
    // DESTRUCTURE ARRAY
    [cardsInCurrentCollection] = cardsInCurrentCollection;
    console.log(cardsInCurrentCollection);
    console.log(cardsInCurrentCollection.length);
  };

  const displayCards = () => {
    if (!cardsInCurrentCollection || cardsInCurrentCollection.length === 0)
      return null;

    return (
      <div>
        <DisplayCards cardsInCollection={cardsInCurrentCollection} />
      </div>
    );
    // return cardsInCurrentCollection.length === 0 ? null : (
    //   <div>
    //     <DisplayCards cardsInCollection={cardsInCurrentCollection} />
    //   </div>
    // );
  };

  // CHECK IF COLLECTIONS ARE IN DATABASE AND RETURN IF YES
  const collections = props.collections;
  if (collections.length === 0) {
    return <div>No Collection Found</div>;
  } else {
    const collection = collections.map((el, index) => {
      return (
        <div
          className="collection-display"
          key={index + 1}
          onClick={() => getCardsInCollection(el)}
        >
          <i className="fas fa-plus-square icon"></i>
          <h3>{el.title}</h3>
          <div></div>
        </div>
      );
    });
    return (
      <div>
        {collection}
        {displayCards()}
        {/* <DisplayCards cardsInCollection={cardsInCurrentCollection} /> */}
      </div>
    );
  }
}

export default ShowCollections;
