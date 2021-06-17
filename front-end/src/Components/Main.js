import React from "react";
import Welcome from "./Welcome";
import Collections from "./Collections";
import Card from "./Card";
import CreateNewCollection from "./CreateCollection";
import EditCard from "./EditCard";
import { AiFillHome } from "react-icons/ai";

import { useGlobalContext } from "../context";

const Main = () => {
  const { showCollection, setShowCollection, showCards, form } =
    useGlobalContext();

  return (
    <>
      <div onClick={() => setShowCollection(false)}>
        back to home
        <AiFillHome />
      </div>
      {showCollection || <Welcome />}
      {showCollection && <Collections />}
      {showCards && <Card />}
      {(form === "add-collection" && <CreateNewCollection />) ||
        (form === "edit-card" && <EditCard />)}
    </>
  );
};

export default Main;
