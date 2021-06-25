import { AiOutlineFolderAdd } from "react-icons/ai";
import { useGlobalContext } from "../context";

const Collection = ({ _id, title, cards, createdBy, active }) => {
  const {
    setCurrentCollection,
    setShowCards,
    setCardCount,
    setCollectionID,
    setForm,
    setCollections,
  } = useGlobalContext();

  const getCardsInCollection = () => {
    setShowCards(true);
    setCurrentCollection(cards);
    setCardCount(0);
    setCollectionID(_id);
    addActiveClass();
  };

  const addActiveClass = () => {
    setCollections((coll) => {
      const updated = coll.map((el) => {
        return el._id === _id
          ? { ...el, active: true }
          : { ...el, active: false };
      });
      return updated;
    });
  };

  const addCard = () => {
    setCollectionID(_id);
    setForm("add-card");
  };

  return (
    <div className={`collection ${active && "collection-active"}`}>
      <button className="btn add-card" onClick={addCard}>
        <AiOutlineFolderAdd />
      </button>
      <div onClick={(e) => getCardsInCollection(e, cards)}>
        <h3>{title}</h3>
        <small>created by: {createdBy}</small>
      </div>
    </div>
  );
};

export default Collection;
