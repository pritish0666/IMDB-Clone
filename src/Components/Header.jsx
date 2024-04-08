import React from "react";
import { MenuItems } from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 mx-auto max-w-6xl">
      <div className="flex gap-4">
        <MenuItems Icon={AiFillHome} title="home" address="/" />
        <MenuItems Icon={BsFillInfoCircleFill} title="about" address="/about" />
      </div>
      <div className="flex gap-1 items-center ">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMDb
        </span>
        <span className="hidden sm:inline text-xl">Clone</span>
      </div>
    </div>
  );
};

export default Header;
