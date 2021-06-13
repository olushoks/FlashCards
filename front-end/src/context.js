import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showCollection, setShowCollection] = useState(false);
  const [collections, setCollection] = useState([]);
  const [currentCollection, setCurrentCollection] = useState([]);
  const [showCards, setShowCards] = useState(false);
  let [cardCount, setCardCount] = useState(1);

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
        setCollection(data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
