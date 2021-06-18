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
  const { showCollection, setShowCollection, showCards, setShowCards, form } =
    useGlobalContext();

  return (
    <>
      {showCollection && (
        <div
          onClick={() => {
            setShowCollection(false);
            setShowCards(false);
          }}
        >
          back to home
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
