import React, { useEffect } from "react";
import Welcome from "./Welcome";
import Collections from "./Collections";

import { useGlobalContext } from "../context";

const Main = () => {
  const { user, showCollection, setShowCollection } = useGlobalContext();

  return (
    <>
      {showCollection || <Welcome />}
      {showCollection && <Collections />}
    </>
  );
};

// class MainPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collections: [],
//       name: "",
//       display: "",
//       displayMain: "hide",
//       collectionView: "",
//       error: "",
//       view: "",
//     };
//   }

//   // HANDLE CHANGE FOR NAME INPUT
//   handleChange = (e) => {
//     let name = e.target.value;
//     name = name.trim();
//     // Fine tune name provided to be Title Case
//     this.setState({ name });
//   };

//   // HANDLE BUTTON CLICK
//   handleClick = () => {
//     let { name } = this.state;
//     if (!name) {
//       this.setState({ error: "You must enter a name to continue" });
//     } else {
//       name = name[0].toUpperCase() + name.slice(1).toLowerCase();
//       this.setState({ name, display: "hide", displayMain: "" });
//     }
//   };

//   // CREATE NEW COLLECTION
//   createCollection = () => {
//     this.setState({
//       view: "createCollection",
//       displayMain: "hide",
//       collectionView: "",
//     });
//   };

//   // DISPLAY VIEW
//   displayView = () => {
//     if (this.state.view === "displayCollections") {
//       const styles = `${this.state.collectionView} collection-div`;
//       return (
//         <div className={styles}>
//           <ShowCollections collections={this.state.collections} />
//           <div onClick={this.goBackButton}>
//             <i className="fas fa-long-arrow-alt-left back">Go Back</i>
//           </div>
//         </div>
//       );
//     } else if (this.state.view === "createCollection") {
//       return (
//         <div className={this.state.collectionView}>
//           <AddCollection action="Add New Collection" />
//           <i
//             className="fas fa-long-arrow-alt-left back"
//             onClick={this.goBackButton}
//           >
//             Go Back
//           </i>
//         </div>
//       );
//     }
//   };

//   showMain = () => {
//     const style = `${this.state.displayMain} main container`;
//     return (
//       <div className={style}>
//         <p>Great to have you here {this.state.name}</p>
//         <p>What would you like to do?</p>
//         <div>
//           <button className="collection-btn" onClick={this.getCollections}>
//             View Collections
//             <i className="fas fa-binoculars"></i>
//           </button>
//           <button className="collection-btn" onClick={this.createCollection}>
//             Create A Collection
//             <i className="fas fa-folder-plus"></i>
//           </button>
//         </div>
//       </div>
//     );
//   };

//   goBackButton = () => {
//     this.setState({
//       display: "hide",
//       displayMain: "",
//       collectionView: "hide",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <WelcomePage
//           handleChange={this.handleChange}
//           handleClick={this.handleClick}
//           display={this.state.display}
//           errorMessage={this.state.error}
//         />
//         {this.showMain()}
//         {this.displayView()}
//       </div>
//     );
//   }
// }

export default Main;
