import React, { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import homeData from "./../data/homeData.js";
import routines from "./../data/routines.js";

const Routine = () => {
  const { p_id } = useParams();
  const [routineItems, setroutineItems] = useState(null);
  const [routineItem, setroutineItem] = useState(null);
  useEffect(() => {
    const getRoutineData = () => {
      const routine = routines.find((data) => data.p_id == p_id);
      return routine;
    };
    const getData = () => {
      const routine = homeData.find((data) => data.id == p_id);
      return routine;
    };
    const res = getRoutineData();
    const resRoutine = getData();
    setroutineItems(res);
    setroutineItem(resRoutine);
  }, []);
  return (
    <div className="relative w-full flex flex-col">
      <button className="absolute top-3 left-3">
        <MdArrowBack size={25} color="#ffffff" />
      </button>
      <div className=" bg-[#DE5D58] py-10 flex flex-col justify-center items-center text-white ">
        <h4 className="text-3xl font-bold">
          {routineItem?.routineData?.routine_name}
        </h4>
        <span className="text-xl">
          {routineItem?.routineData?.routine_level}
        </span>
        <span className="text-xl">
          {routineItem?.routineData?.routine_time} mins {"&"}{" "}
          {routineItems?.data?.length} workouts
        </span>
      </div>
      {routineItems?.data.map((data, index) => (
        <div key={index} className="flex border-b ">
          <img src={data.image} alt="Image" width={150} height={150} />
          <div className="flex flex-col  justify-center">
            <h4 className="text-2xl">{data.routineName}</h4>
            <span className="text-lg text-gray-400">
              {data.routineDescription}
            </span>
          </div>
        </div>
      ))}
      <div className="flex justify-center py-3">
        <Link
          to={`/workout/${routineItems?.p_id}`}
          className="mt-5 bg-[#DE5D58] py-2 px-10 rounded-full"
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default Routine;
