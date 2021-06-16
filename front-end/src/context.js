import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showCollection, setShowCollection] = useState(false);
  const [collections, setCollections] = useState([]);
  const [currentCollection, setCurrentCollection] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [collectionID, setCollectionID] = useState(null);
  const [cardCount, setCardCount] = useState(0);
  const [form, setForm] = useState(null);

  // CHECK IF NAME IS STORED IN LOCAL STORAGE
  useEffect(() => {
    const name = localStorage.getItem("user");
    setUser(name);
    getCollections();
  }, []);

  // FECTCH COOLLECTIONS
  const getCollections = async () => {
    await axios
      .get("http://localhost:5000/api/collections/")
      .then(({ data }) => {
        setCollections(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addNewCollection = async (newCollection) => {
    await axios
      .post("http://localhost:5000/api/collections", newCollection)
      .then(({ data }) => {
        setCollections(data);
      })
      .catch((err) => console.log(err));
  };

  const deleteCard = async (cardID) => {
    await axios
      .delete(
        `http://localhost:5000/api/collections/${collectionID}/cards/${cardID}`
      )
      .then(({ data }) => {
        setCurrentCollection(data);
      })
      .catch((err) => err);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        showCollection,
        setShowCollection,
        collections,
        currentCollection,
        setCurrentCollection,
        showCards,
        setShowCards,
        cardCount,
        setCardCount,
        setCollectionID,
        deleteCard,
        addNewCollection,
        form,
        setForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
