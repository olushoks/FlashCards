import { MdLibraryAdd } from "react-icons/md";

const Collection = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <small>created by: user</small>
      <button className="btn">
        <MdLibraryAdd />
      </button>
    </div>
  );
};

export default Collection;
