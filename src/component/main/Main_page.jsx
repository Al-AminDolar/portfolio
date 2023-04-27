import React from "react";
import Image from "../Images/IMG20221015142448-removebg-preview.png";
const Main_page = () => {
  return (
    <div className="flex justify-between  ">
      <div className=" text-white space-y-5  mb-10 w-[440px] self-end">
        <p className="text-sm font-sans font-semibold text-gray-400">
          Hello Everyone!
        </p>
        <h1 className="text-7xl text-[rgb(13,173,230)] font-mono font-bold">
          <span className="text-white">I'm</span> Al
          <spanc className="text-white">-</spanc>Amin Dolar
        </h1>
        <span className="text-sm">
          A Software engineer & professional web developer
        </span>

        <div className=" text-base font-medium text-gray-500">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that. Allah Hafez
        </div>

        <div className="text-start flex justify-between items-center bg-[#222f43]  rounded-2xl py-3 px-4 border border-cyan-400  hover:shadow-xl  hover:shadow-sky-800 ">
          <input
            className="bg-[#222f43]  rounded-2xl outline-none"
            type="text"
            placeholder="Type Your Email Address"
          />
          <p className="text-white font-mono bg-[rgb(13,184,224)] py-2 px-4 rounded-md font-medium">
            Subscribe
          </p>
        </div>
      </div>

      <div className="pr-10 ">
        <img src={Image} alt="" className="w-[300px]" />
      </div>
    </div>
  );
};

export default Main_page;
