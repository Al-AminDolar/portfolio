import React from "react";
import ArticleCart from "./ArticleCart";

import dummyData from "../dummy/dummyProducts.json";

const Blogs = () => {
  const { cauroselProducts } = dummyData;
  return (
    <div className="my-14">
      <div className="my-16">
        <h1 className="text-[#0db3e2] text-5xl font-bold">Editors Picked</h1>
        <h4 className="text-[#8a9ebd] text-xl pt-3">
          Featured and highly related articles
        </h4>
      </div>

      <div className="space-y-10">
        <div className="flex justify-center gap-8 ">
          {cauroselProducts.slice(0, 2).map((data, i) => {
            return <ArticleCart data={data} key={i} />;
          })}
        </div>

        <div className="flex justify-center gap-8">
          {cauroselProducts.slice(2).map((data, i) => {
            return <ArticleCart data={data} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
