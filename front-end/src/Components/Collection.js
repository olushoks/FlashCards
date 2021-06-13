import { MdLibraryAdd } from "react-icons/md";

const Collection = ({ title }) => {
  return (
    <div className="collection">
      <div onClick={() => console.log(`show cards in collection`)}>
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
