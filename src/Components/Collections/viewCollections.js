import React from "react";
import "./addCollections.css";

function viewCollections(props) {
  const collections = props.collections;
  if (collections.length === 0) {
    return <div>No Collection Found</div>;
  } else {
    const collection = collections.map((el) => {
      return (
        <div>
          <h3>{el.title}</h3>
        </div>
      );
    });
    return collection;
  }
}

export default viewCollections;
