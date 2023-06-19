import React, { useEffect } from "react";
import BottomNavBar from "../components/BottomNavBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full">
      <div className="mb-20 overflow-scroll">
        <Outlet />
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Home;
