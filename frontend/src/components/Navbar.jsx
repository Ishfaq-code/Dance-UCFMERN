import React from "react";
import { navLinks } from "../js/navlinks";

const Navbar = () => {
  return (
    <nav className="bg-amber-400 text-white  shadow-lg flex justify-between items-center p-4  font-title">

      <div className="text-2xl">
        Dance@UCF
      </div>

      <div className="flex">
      {navLinks.map((item, index) => (
        <a key={index} href={item.link} className="p-4 text-lg hover:text-xl">{item.title}</a>
      ))}
      </div>



      <button className="bg-white text-amber-400 px-4 py-2 rounded-md hover:bg-gray-200">
        Sign In
      </button>

    </nav>
  );
};

export default Navbar;
