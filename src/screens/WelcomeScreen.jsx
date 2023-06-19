import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="w-full h-screen bg-[#DE5D58]  flex flex-col justify-center items-center">
      <div className="h-4/6 flex justify-center items-center">
        <img src={"/assets/defaults/logo.png"} width={100} height={100} />
      </div>

      <div className="flex flex-col gap-y-8">
        <h4 className="text-white text-5xl font-bold">Welcome</h4>
        <Link
          className="bg-white w-full block text-[#DE5D58] font-medium px-32 py-3 text-2xl rounded-md"
          to="/register"
        >
          Register
        </Link>
        <Link
          className="bg-[#DE5D58] border-2 font-medium text-white border-white w-full block px-32 py-3 text-2xl rounded-md"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
