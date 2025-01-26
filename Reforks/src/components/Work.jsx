import React from "react";
("48:45");
const Work = () => {
  var image = [
    {
      url: "https://i.pinimg.com/736x/e3/f9/a3/e3f9a39a1a0fbf8db8a7793fd110f91c.jpg",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://i.pinimg.com/736x/6a/be/34/6abe343b624f648d5628d3849bbbec22.jpg",
      top: "53%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/63/9c/24/639c24b01da0c0fb81b08f640189fe36.jpg",
      top: "47%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/7d/a4/ee/7da4ee10df3b9eeee7b84f13f2a06a3f.jpg",
      top: "51%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/bf/de/5c/bfde5ca8d00de7d5a38f34554eef7a4d.jpg",
      top: "53%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/69/8e/5d/698e5d8b51c9cd693ba02e38ec54b42d.jpg",
      top: "55%",
      left: "52%",
      isActive: false,
    },
  ];
  return (
    <div>
      <div className="W-full   ">
        <div className=" relative  max-w-screen-xl mx-auto text-center  text-white ">
          <h1 className="text-[20vw] leading-none select-none font-medium tracking-tight">
            WORKS
          </h1>
        </div>
      </div>
      <div className="  top-0 absolute w-full h-full ">
        {image.map(
          (elem, index) =>
            elem.isActive && (
              <img
                className=" absolute w-60  rounded-lg -translate-x-[50%] -translate-y-[50%]"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Work;
