import React from "react";
import { FaUserAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-56">
      <div className="grid grid-cols-3 gap-10">
        <div className="space-y-8">
          <h4 className="text-[#d8e6fb] text-4xl font-bold">S.T.P</h4>
          <p className="text-[#94a9c9] text-justify">
            Thank you so much for visiting my site. I am always trying to give
            my best effort for any projet or product. If You want to convert
            your idea into a smart application then you most welcome
          </p>

          <div>
            <h6 className="text-[#b9e0f2] font-semibold mb-1">Address</h6>
            <p className="text-[#94a9c9] text-base">Dhandmondi 27</p>
            <p className="text-[#94a9c9] text-base">Tallbag Road 93No Home</p>
          </div>
        </div>
        <div className="space-y-8">
          <h6 className="text-[#b9e0f2] font-semibold text-xl">Categories</h6>
          <div className="space-y-4 text-base">
            <span className="flex justify-between text-[#94a9c9]">
              <p>Frontend</p>
              <p>Backend</p>
            </span>
            <span className="flex justify-between text-[#94a9c9]">
              <p>React</p>
              <p>JavaScript</p>
            </span>
            <span className="flex justify-between text-[#94a9c9]">
              <p>Node js</p>
              <p>Mongose</p>
            </span>
            <span className="flex justify-between text-[#94a9c9]">
              <p>Tailwind css</p>
              <p>Redux</p>
            </span>
            <span className="flex justify-between text-[#94a9c9]">
              <p>Technology</p>
              <p>Artifical Inteligence</p>
            </span>
            <span className="flex justify-between text-[#94a9c9]">
              <p>Travelling</p>
              <p>Digital Marketing</p>
            </span>
          </div>
        </div>
        <div className="space-y-8">
          <h6 className="text-[#b9e0f2] font-semibold text-xl">Newsletter</h6>
          <p className="text-[#94a9c9] text-justify text-base">
            Sign up to be first to receive the latest stories inspiring us, case
            studies, and industry news.
          </p>
          <div className=" flex items-center text-[#94a9c9] gap-1">
            <FaUserAlt />
            <input type="text" className="bg-" placeholder="Your Name" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
