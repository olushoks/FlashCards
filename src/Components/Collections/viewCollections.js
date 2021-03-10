import React from "react";
import "./viewCollections.css";

function ShowCollections(props) {
  const collections = props.collections;
  if (collections.length === 0) {
    return <div>No Collection Found</div>;
  } else {
    const collection = collections.map((el, index) => {
      return (
        <div key={index + 1}>
          <h3>
            {el.title}
            {index}
          </h3>
        </div>
      );
    });
    return collection;
  }
}

export default ShowCollections;
