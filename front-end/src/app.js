import React from "react";
import MainPage from "./Components/Main";
import { useGlobalContext } from "./context";

function App() {
  console.log(useGlobalContext());
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
