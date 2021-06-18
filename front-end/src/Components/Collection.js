import { MdLibraryAdd } from "react-icons/md";
import { useGlobalContext } from "../context";

const Collection = ({ _id, title, cards, createdBy }) => {
  const {
    setCurrentCollection,
    setShowCards,
    setCardCount,
    setCollectionID,
    setForm,
  } = useGlobalContext();

  const getCardsInCollection = () => {
    setShowCards(true);
    setCurrentCollection(cards);
    setCardCount(0);
    setCollectionID(_id);
  };

  const addCard = () => {
    setCollectionID(_id);
    setForm("add-card");
  };

  return (
    <div className="collection">
      <div onClick={() => getCardsInCollection(cards)}>
        <h3>{title}</h3>
        <small>created by: {createdBy}</small>
      </div>
      <button className="btn add-card" onClick={addCard}>
        <MdLibraryAdd />
      </button>
    </div>
  );
};

export default Collection;
