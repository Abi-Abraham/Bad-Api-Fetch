import React from "react";
import CharactorItem from "./CharactorItem";
import Spinner from "../ui/Spinner";

const CharactorGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharactorItem key={item.char_id} item={item}></CharactorItem>
      ))}
    </section>
  );
};

export default CharactorGrid;
