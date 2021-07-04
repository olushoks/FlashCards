import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { handleAlert } from "./helper";

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
  const [alert, setAlert] = useState({ text: "", type: "" });

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
      .then((res) => {
        setCollections(res.data);
        if (res.status >= 200 && res.status < 300) {
          handleAlert(setAlert, "collection succesfully created", "success");
        }
      })
      .catch((err) => console.log(err.response));
  };

  const deleteCard = async (cardID) => {
    await axios
      .delete(
        `http://localhost:5000/api/collections/${collectionID}/cards/${cardID}`
      )
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          setCardCount(0);
          setCurrentCollection(res.data.cards);
          setCollections((collections) => {
            const updated = collections.map((collection) => {
              if (collection._id === collectionID) {
                return { ...res.data, active: true };
              } else {
                return { ...collection, active: false };
              }
            });
            return updated;
          });
        }
      })
      .catch((err) => err);
  };

  const editCard = async (cardID, editedCard) => {
    await axios
      .put(
        `http://localhost:5000/api/collections/${collectionID}/cards/${cardID}`,
        editedCard
      )
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          setCollectionID(res.data._id);
          setCurrentCollection(res.data.cards);
          setCollections((collections) => {
            const updated = collections.map((collection) => {
              if (collection._id === collectionID) {
                return { ...res.data, active: true };
              } else {
                return { ...collection, active: false };
              }
            });
            return updated;
          });
          handleAlert(setAlert, "card succesfully edited", "success");
        }
      })
      .catch((err) => console.log(err));
  };

  const addCard = async (newCard) => {
    await axios
      .post(
        `http://localhost:5000/api/collections/${collectionID}/add-card/cards`,
        newCard
      )
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          setCollectionID(res.data._id);
          setCurrentCollection(res.data.cards);
          setCollections((collections) => {
            const updated = collections.map((collection) => {
              if (collection._id === collectionID) {
                return { ...res.data, active: true };
              } else {
                return { ...collection, active: false };
              }
            });
            return updated;
          });
          handleAlert(setAlert, "card succesfully added", "success");
        }
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
        alert,
        setAlert,
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
