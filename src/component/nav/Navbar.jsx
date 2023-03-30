import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-900 h-20 flex items-center justify-center">
        <div>
          <p className="text-white">Soft-Tech-Programmer</p>
        </div>
        <div>
          <ui className="flex  gap-7 text-slate-400 text-xl font-mono font-medium">
            <oi className="text-sky-500">Home</oi>
            <ol>Resume</ol>
            <ol>Expert</ol>
            <ol>Project</ol>
            <ol>Blog</ol>
            <ol>About</ol>
          </ui>
        </div>

        <div>
          <p className="text-white">About Me</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
