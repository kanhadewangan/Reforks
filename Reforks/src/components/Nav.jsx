import React from "react";
import { Button } from "./Button";
const Nav = () => {
  return (
    <div className="max-w-screen-xl  mx-auto flex items-center py-6 justify-between text-white border-b-2  border-zinc-700 ">
      <div className="nleft flex items-center">
        <div className="w-32 h-32 overflow-hidden rounded-md p-5">
          <img
            src="https://i.pinimg.com/736x/36/0c/d1/360cd1f1ca79d9522c973777bd7b696b.jpg"
            alt=""
          />
        </div>
        <div className="links flex gap-15 ml-20 ">
          {["Home", "Work", "Culture", "News"].map((elem, idx) =>
            elem.length == 0 ? (
              <span className="w-[2px] h-7 bg-zinc-600"></span>
            ) : (
              <a
                className="text-sm  font-regular flex items-center gap-1 "
                href="#"
              >
                {idx === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45rem #00FF19 " }}
                    className="inline-block  w-2 h-2 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Nav;
