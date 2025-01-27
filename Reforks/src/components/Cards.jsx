import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div>
      <div className="w-full ">
        <div className="max-w-screen-xl mx-auto py-20  flex  gap-4  ">
          <Card width ={"basis-1/3"} />
          <Card  width ={"basis-2/3"}/>
        </div>
      </div>
    </div>
  );
};

export default Cards;
