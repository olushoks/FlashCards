import React from "react";
import Welcome from "./Welcome";
import Collections from "./Collections";
import Card from "./Card";
import CreateNewCollection from "./CreateCollection";
import EditCard from "./EditCard";
import AddCard from "./AddCard";
import { AiFillHome } from "react-icons/ai";

import { useGlobalContext } from "../context";

const Main = () => {
  const {
    showCollection,
    setShowCollection,
    setCollections,
    showCards,
    setShowCards,
    form,
  } = useGlobalContext();

  const backToGHome = () => {
    setShowCollection(false);
    setShowCards(false);
    setCollections((coll) => {
      const updated = coll.map((el) => {
        return { ...el, active: false };
      });
      return updated;
    });
  };

  return (
    <>
      {showCollection && (
        <div className="home-btn" onClick={backToGHome}>
          <AiFillHome />
        </div>
      )}
      {showCollection || <Welcome />}
      {showCollection && <Collections />}
      {showCards && <Card />}
      {(form === "add-collection" && <CreateNewCollection />) ||
        (form === "edit-card" && <EditCard />) ||
        (form === "add-card" && <AddCard />)}
    </>
  );
};

export default Main;
