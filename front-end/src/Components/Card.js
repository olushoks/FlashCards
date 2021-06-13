import React from "react";
import { useGlobalContext } from "../context";

const Card = () => {
  const { currentCollection } = useGlobalContext();
  console.log(currentCollection);
  return <div>Hello</div>;
};

export default Card;
