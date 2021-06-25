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
        // setCollections(data);
        const updatedColl = data.map((el) => {
          return { ...el, active: false };
        });
        setCollections(updatedColl);
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
      .catch((err) => console.log(err.response));
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

  const editCard = async (cardID, editedCard) => {
    await axios
      .put(
        `http://localhost:5000/api/collections/${collectionID}/cards/${cardID}`,
        editedCard
      )
      .then(({ data }) => {
        setCollectionID(data._id);
        setCurrentCollection(data.cards);
        setCollections((collections) => {
          return collections.map((coll) => {
            return coll._id === collectionID ? data : coll;
          });
        });
      })
      .catch((err) => console.log(err));
  };

  const addCard = async (newCard) => {
    await axios
      .post(
        `http://localhost:5000/api/collections/${collectionID}/add-card/cards`,
        newCard
      )
      .then(({ data }) => {
        setCollectionID(data._id);
        setCurrentCollection(data.cards);
        setCollections((collections) => {
          return collections.map((coll) => {
            return coll._id === collectionID ? data : coll;
          });
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        showCollection,
        setShowCollection,
        collections,
        setCollections,
        currentCollection,
        setCurrentCollection,
        showCards,
        setShowCards,
        cardCount,
        setCardCount,
        collectionID,
        setCollectionID,
        form,
        setForm,
        deleteCard,
        addNewCollection,
        editCard,
        addCard,
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
