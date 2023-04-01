import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
const Caurosel = () => {
  return (
    <div className=" flex justify-center pb-44">
      <div className="bg-[blueGray-800] h-[240px] w-[900px] border border-gray-700  rounded-md shadow-sm p-5 grid grid-cols-5">
        <div className="col-span-1 space-y-3">
          <p className="text-[#b6dcef] text-xl font-sans font-semibold">
            Hot Topics
          </p>
          <p className="text-gray-400 font-semibold text-sm w-2/3">
            Don't miss out on the latest news about Travel tips, Hotels review,
            Food guide...
          </p>

          <div className="text-gray-200 flex gap-3 ">
            <span className="p-1 border border-gray-600 rounded-full bg-[#1d222e] hover:bg-[#0dcaf0] cursor-pointer">
              <BiLeftArrowAlt size={20} />
            </span>
            <span className="p-1 border border-gray-600 rounded-full bg-[#1d222e] hover:bg-[#0dcaf0] cursor-pointer">
              <BiRightArrowAlt size={20} />
            </span>
          </div>
        </div>
        <div className="col-span-4 text-slate-50">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt earum
          nemo similique laboriosam, unde sed labore, cumque nostrum fugit
          reprehenderit consequuntur facere explicabo a sit necessitatibus
          perferendis, libero voluptate tempora.
        </div>
      </div>
    </div>
  );
};

export default Caurosel;
