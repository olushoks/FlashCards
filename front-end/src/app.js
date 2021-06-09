import React from "react";
import Header from "./Components/Header";
import MainPage from "./Components/Main";
import { useGlobalContext } from "./context";

function App() {
  console.log(useGlobalContext());
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}

export default App;
