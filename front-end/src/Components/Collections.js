import React from "react";
import Collection from "./Collection";

import { useGlobalContext } from "../context";

const Collections = () => {
  const { collections, setForm, setShowCards } = useGlobalContext();

  const addCollection = () => {
    setForm("add-collection");
    setShowCards(false);
  };

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
      <div className="collections-div">
        <div className="collection-header">
          <h2 className="collection-title">collections</h2>
          <button className="btn add-collection-btn" onClick={addCollection}>
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

export default Collections;
