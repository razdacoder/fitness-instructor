import React from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled, MdFormatListBulleted, MdSettings } from "react-icons/md";

const BottomNavBar = () => {
  return (
    <div className="fixed z-10 w-full bottom-0 flex justify-between items-center h-20 px-4 border-t-2 bg-white border-gray-200">
      <Link to={"/home"} className="flex flex-col items-center text-[#DE5D58]">
        <MdHomeFilled size={30} />
        <span>Home</span>
      </Link>
      <Link to={"#"} className="flex flex-col items-center text-gray-500">
        <MdFormatListBulleted size={30} />
        <span>My List</span>
      </Link>
      <Link
        to={"/home/settings"}
        className="flex flex-col items-center text-gray-500"
      >
        <MdSettings size={30} />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default BottomNavBar;
