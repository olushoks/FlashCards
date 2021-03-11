import React from "react";
import "./viewCollections.css";

function ShowCollections(props) {
  const collections = props.collections;
  if (collections.length === 0) {
    return <div>No Collection Found</div>;
  } else {
    const collection = collections.map((el, index) => {
      return (
        <div className="collection-display" key={index + 1}>
          <i className="fas fa-plus-square"></i>
          {/* <i className="far fa-plus-square"></i>
          <i className="fas fa-plus"></i> */}
          <h3>{el.title}</h3>
        </div>
      );
    });
    return collection;
  }
}

export default ShowCollections;
