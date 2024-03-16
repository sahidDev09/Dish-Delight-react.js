import SingleCookOne from "./SingleCookOne";
import CurrentCook from "./CurrentCook";
import { useState } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";

/* eslint-disable react/prop-types */
const WanttoCook = ({ cooked }) => {
  const [preparing, setPreparing] = useState([]);
  let [calories, setCalories] = useState(0);
  let [time, setTime] = useState(0);

  const handlePreparing = (prep) => {
    setPreparing([...preparing, prep]);
    const newTime = (time += prep.preparing_time);
    setTime(newTime);

    const newCalories = (calories += prep.Calories);
    setCalories(newCalories);
  };

  return (
    <div className=" border border-gray-300 rounded-md min-h-full md:w-2/5">
      <h1 className=" text-2xl font-bold text-center mt-5">
        Want to cook : {cooked.length}
      </h1>
      <hr className=" my-5" />
      <div>
        <table className=" table">
          <thead className="">
            <tr>
              <th></th>
              <th className="p-0 pr-5">Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
        </table>
        {cooked.map((ck, index) => (
          <SingleCookOne
            key={index}
            cooked={ck}
            index={index + 1}
            handlePreparing={() => handlePreparing(ck)} // Pass only the clicked recipe
          ></SingleCookOne>
        ))}
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mt-2">
          Currently cooking :{preparing.length}
        </h1>
        <hr className=" my-5" />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className="gap-5">
              {preparing.map((prep, index) => (
                <CurrentCook
                  key={index}
                  preparing={prep}
                  index={index + 1}></CurrentCook>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-4 flex gap-2 items-center text-xl font-bold">
        <h1>Total Time = </h1>
        <div className="time flex items-center gap-2 text-green-600">
          <IoTimerOutline></IoTimerOutline>
          <p>{time} Minutes</p>
        </div>
      </div>

      <div className="px-4 flex gap-2 items-center text-xl font-bold">
        <h1>Total Calories = </h1>
        <div className="time flex items-center gap-2 text-red-400">
          <FaFireAlt></FaFireAlt>
          <p>{calories} Calories</p>
        </div>
      </div>
    </div>
  );
};

export default WanttoCook;
