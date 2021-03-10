import React from "react";
import MainPage from "../MainPage/main";

function Collections(props) {
  const viewCollections = () => {
    alert(`Lets view all collections`);
  };

  const createCollection = () => {
    alert(`Lets create a collection!`);
  };
  return (
    <MainPage
      viewCollections={viewCollections}
      createCollection={createCollection}
    />
  );
}

export default Collections;
