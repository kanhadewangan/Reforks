import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div>
      <div className="w-full ">
        <div className="max-w-screen-xl mx-auto py-20  flex  gap-4  ">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Cards;
