import React from "react";

const Timer = ({ counter, callback }) => {
  return (
    <div className="bg-[#DE5D58] absolute w-full gap-y-10 h-screen flex-col flex justify-center items-center">
      <h4 className="text-white text-2xl font-bold">Take a rest</h4>
      <div className=" w-72 h-72 border-8 border-white rounded-full flex justify-center items-center text-3xl text-white font-bold">
        {counter} seconds
      </div>
      {/* <button
        onClick={callback}
        className="bg-white text-2xl text-[#DE5D58] font-bold py-2 px-10 rounded-full"
      >
        Skip
      </button> */}
    </div>
  );
};

export default Timer;
