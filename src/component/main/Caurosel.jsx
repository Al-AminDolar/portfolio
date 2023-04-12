import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../dummy/dummyProducts.json";

const Caurosel = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-prev-arrow bg-white">Prev</button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-next-arrow bg-white" onClick={onClick}>
      Next
    </button>
  );

  const { popularProducts } = data;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className=" flex justify-center pb-44">
      <div className="bg-[#131c31]  w-[900px] border border-gray-800  rounded-md shadow-sm p-5 grid grid-cols-5">
        <div className="col-span-1 space-y-3">
          <p className="text-[#b9e0f2] text-xl font-sans font-bold">
            Hot Topics
          </p>
          <p className="text-[#b9e0f2] font-semibold text-sm w-2/3">
            Don't miss out on the latest news about Travel tips, Hotels review,
            Food guide...
          </p>

          <div className="text-gray-200 flex gap-3 ">
            <span className="p-1 border border-gray-600 rounded-full bg-[#1d222e] hover:bg-[#0dcaf0] cursor-pointer ">
              <BiLeftArrowAlt size={20} />
            </span>
            <span className="p-1 border border-gray-600 rounded-full bg-[#1d222e] hover:bg-[#0dcaf0] cursor-pointer">
              <BiRightArrowAlt size={20} />
            </span>
          </div>
        </div>
        <div className="col-span-4 p-10  bg-white rounded ">
          <Slider {...settings}>
            {popularProducts?.slice(0, 3).map((data, i) => {
              return (
                <div className=" pt-2" key={i}>
                  <div className="flex  flex-col justify-center item-center text-center cursor-pointer  mx-[5%] ">
                    <img
                      src={data?.img}
                      alt=""
                      className="hover:outline outline-2 outline-[rgb(13,173,230)] rounded-lg h-[80%] w-[80%]"
                    />
                    <h3 className="text-sm h-[80%] w-[80%]  text-black">
                      {data?.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Caurosel;
