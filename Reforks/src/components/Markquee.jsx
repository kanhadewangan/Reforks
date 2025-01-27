import React from "react";

const Markquee = ({imgUrl}) => {
  return (
    <div>
      {imgUrl.map(item=><img src={imgUrl}/>)}
    </div>
  );
};

export default Markquee;
