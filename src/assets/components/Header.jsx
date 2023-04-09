import React from "react";
import img from "../../images/my-pic.jpg";

const Header = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center py-4 px-6 md:py-1">
        <h2 className="text-3xl font-extrabold font-mono text-indigo-600">
          Tech Coffeshop
        </h2>
        <img
          src={img}
          className="max-auto w-10 h-10 md:w-20 md:h-20 rounded-full object-fit"
          alt=""
        />
      </nav>
      <div className="border-b-2 border-gray-400"></div>
    </div>
  );
};

export default Header;
