import React, { useEffect, useState } from "react";
import routines from "./../data/routines.js";
import homeData from "./../data/homeData.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Timer from "../components/Timer.jsx";

const WorkOut = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [routineItems, setroutineItems] = useState(null);
  const [routineId, setroutineId] = useState(1);
  const [rest, setRest] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const getRoutineData = () => {
      const routine = routines.find((data) => data.p_id == id);
      return routine;
    };
    const res = getRoutineData();
    setroutineItems(res);
  }, []);
  //   const skipRest = () => {
  //     setRest(false);
  //     setCounter(0)
  //   };

  useEffect(() => {
    counter > 0
      ? setTimeout(() => setCounter(counter - 1), 1000)
      : setRest(false);
    return clearTimeout();
  }, [counter]);

  const nextRoutine = () => {
    setRest(true);
    setCounter(20);
    setroutineId(routineId + 1);
  };

  return (
    <div className="relative h-screen flex flex-col">
      {rest && <Timer counter={counter} />}

      <div className="h-3/4">
        <img src={routineItems?.data[routineId]?.image} alt="" />
      </div>

      <div className="mt-10 h-1/4 flex gap-y-5 flex-col justify-center items-center">
        <h4 className="text-3xl">
          {routineItems?.data[routineId]?.routineName}
        </h4>
        <span className="text-xl">
          {routineItems?.data[routineId]?.routineDescription}
        </span>
        {routineId < routineItems?.data?.length - 1 ? (
          <button
            onClick={nextRoutine}
            className="text-xl bg-[#DE5D58] py-2 px-10 rounded-full text-white font-medium"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => navigate("/home", { replace: true })}
            className="text-xl bg-[#DE5D58] py-2 px-10 rounded-full text-white font-medium"
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkOut;
