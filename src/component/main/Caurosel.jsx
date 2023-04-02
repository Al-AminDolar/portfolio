import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const Caurosel = () => {
  return (
    <div className=" flex justify-center pb-44">
      <div className="bg-[#131c31] h-[240px] w-[900px] border border-gray-800  rounded-md shadow-sm p-5 grid grid-cols-5">
        <div className="col-span-1 space-y-3">
          <p className="text-[#b9e0f2] text-xl font-sans font-bold">
            Hot Topics
          </p>
          <p className="text-[#b9e0f2] font-semibold text-sm w-2/3">
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
        <div className="col-span-4 ">
          <Slider {...settings} className="">
            <div className="h-300 w-300  bg-red-600 p-10 text-black">
              <h3>Dolar</h3>
            </div>

            <div className="h-300 w-300 bg-slate-500 p-10 text-black">
              <h3>ddddddd</h3>
            </div>

            <div className="h-300 w-300 bg-green-500 p-10 text-black">
              <h3>ssss3</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Caurosel;
