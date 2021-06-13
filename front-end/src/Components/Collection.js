import { MdLibraryAdd } from "react-icons/md";
import { useGlobalContext } from "../context";

const Collection = ({ title, cards }) => {
  const { setCurrentCollection, setShowCards, setCardCount } =
    useGlobalContext();

  const getCardsInCollection = () => {
    setShowCards(true);
    setCurrentCollection(cards);
    setCardCount(1);
  };

  return (
    <div className="collection">
      <div onClick={() => getCardsInCollection(cards)}>
        <h3>{title}</h3>
        <small>created by: user</small>
      </div>
      <button
        className="btn add-card"
        onClick={() => console.log(`add card to collection`)}
      >
        <MdLibraryAdd />
      </button>
    </div>
  );
};

export default Collection;
