import React from "react";
import homeData from "./../data/homeData.js";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";

const HomeScreen = () => {
  return (
    <div className="bg-[#F8F8F8] py-5 px-2">
      <div className="border-b border-gray-200 mb-5 pb-5 flex justify-between items-center">
        <h3 className="font-bold text-3xl">Welcome</h3>
        <MdPerson size={30} />
      </div>

      <div>
        <h5 className="text-2xl">Personal Fitness</h5>
        {homeData.map((data, index) => (
          <div key={data.id} className={`w-full bg-[#d5edf7] mt-5`}>
            <div className="flex justify-between items-center rounded-md">
              <div className="pl-5">
                <h4 className="text-2xl">{data.routineData.routine_name}</h4>
                <span className="text-gray-600">
                  {data.routineData.routine_level}
                </span>
                <div className="flex gap-x-5 mt-8 items-center">
                  <span className="text-lg">
                    {data.routineData.routine_time} mins
                  </span>
                  <Link
                    to={`/routine/${data.id}`}
                    className="bg-[#DE5D58] px-4 py-1 rounded-full"
                  >
                    Start
                  </Link>
                </div>
              </div>
              <img src={data.image} alt="" width={200} height={200} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <View style={{backgroundColor: colors.solidWhite}}>
          <Header userName={en.appName} mainCardHeader={en.mainCardHeader} />
          <MainCard
            image={require('../assets/images/Home/legs.png')}
            headerText={'Legs of Iron'}
            subHeaderText={'Intermediate'}
            timeText={'20 mins'}
            routineType={'Legs of Iron'}
            navigation={navigation}
          />
        </View> */
}

export default HomeScreen;
