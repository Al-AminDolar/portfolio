import React from "react";
import img from "../Images/node.png";
const ArticleCart = () => {
  return (
    <div className="h-[250px] w-[420px] border border-gray-800   rounded-md shadow-md p-5">
      <div className="">
        <img src={img} alt="" className=" rounded-md" />
      </div>

      <div className="flex justify-between text-gray-800">
        <p>#backend#node</p>
        <p>3 mins read</p>
      </div>
      <h1 className="text-3xl font-semibold text-sky-600">
        Node Js For Beginners
      </h1>

      <div className="flex justify-between">
        <p>#backend#node</p>
        <p>read more</p>
      </div>
    </div>
  );
};

export default ArticleCart;
