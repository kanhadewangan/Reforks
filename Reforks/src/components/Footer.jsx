import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full  text-white font-semibold leading-none tracking-tight ">
        <div className="max-w-screen-xl  py-10   mx-auto flex gap-30 ">
          <div className="basis-1/2">
            <h1 className="text-[13rem]">refkous.</h1>
          </div>
          <div className="basis-1/2 flex  gap-10">
            <div className="basis-1/3">
                <h1 className="mb-10 capitalize">Social</h1>
                {["instagram", "facebook", "twitter"].map((item , key) => <a  key ={key} className="block mt-4 capitalize text-zinc-600">{item}</a>)}
            </div>
            <div className="basis-1/3">
                <h1 className="mb-10 capitalize"></h1>
                {["instagram", "facebook", "twitter"].map((item ,idx) => <a key={idx} className="block mt-4 capitalize text-zinc-600">{item}</a>)}
            </div>
           
            
            </div>
            <div>
            <p class name="basis-1 text-sm">
                hello there 
            and welcome to our website! We are glad to have you here. Follow us on social media to stay updated with the latest news and updates.
            </p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
