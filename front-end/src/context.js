import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showCollection, setShowCollection] = useState(false);
  const [collection, setCollection] = useState([]);

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
      value={{ user, setUser, showCollection, setShowCollection, collection }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
