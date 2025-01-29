import React from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";
const Products = () => {
  var Products = [
    { title: "Gyouko", Description: "hello there", live: true, case: false },
    { title: "Gyouko", Description: "hello there", live: true, case: false },
    { title: "Gyouko", Description: "hello there", live: true, case: true },
    { title: "Gyouko", Description: "hello there", live: true, case: true },
  ];
  const [postion, setPostion] = useState(0);
  const mover = (val) => {
    setPostion(val * 23);
  };
  return (
    <div>
      <div className="mt-32 relative">
        {Products.map((elem, index) => (
          <Product mover={mover} count={index} key={index} elem={elem} />
        ))}
        <div className="w-full top-0 h-full absolute pointer-events-none">
          <motion.div
            initial={{ y: postion, x: "-50%" }}
            animate={{ y: postion + `rem` }}
            className=" absolute w-[32rem] h-[23rem] bg-white left-[44%]   overflow-hidden"
          >
            <motion.div
              animate={{ y: -postion  + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
              className="  w-full h-full bg-blue-200"
            ></motion.div>
            <motion.div
              animate={{ y: -postion  + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
              className="  w-full h-full bg-blue-400"
            ></motion.div>
            <motion.div
              animate={{ y: -postion  + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
              className="  w-full h-full bg-blue-600"
            ></motion.div>
            <motion.div
              animate={{ y: -postion  + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
              className="  w-full h-full bg-blue-800"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
