import PropTypes from "prop-types";
import { IoTimerOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import SingleCookOne from "./SingleCookOne";
import CurrentCook from "./CurrentCook";
import { useState } from "react";

const WanttoCook = ({ cooked, setCooked }) => {
  const [preparing, setPreparing] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const handlePreparing = (prep, id) => {
    setPreparing([...preparing, prep]);
    setTotalTime(totalTime + prep.preparing_time);
    setTotalCalories(totalCalories + prep.Calories);

    //Remove item from want to cook

    const newCookData = cooked.filter((item) => item.id !== id);
    setCooked(newCookData);
  };

  return (
    <div className="border border-gray-300 rounded-md min-h-full md:w-2/5">
      <h1 className="text-2xl font-bold text-center mt-5">
        Want to cook: {cooked.length}
      </h1>
      <hr className="my-5" />
      <div className=" p-4">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th className="p-0 pr-5">Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cooked.map((ck, index) => (
              <SingleCookOne
                key={index}
                cooked={ck}
                index={index + 1}
                handlePreparing={() => handlePreparing(ck, ck.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mt-2">
          Currently cooking: {preparing.length}
        </h1>
        <hr className="my-5" />
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {preparing.map((prep, index) => (
                <CurrentCook key={index} preparing={prep} index={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-4 flex gap-2 items-center text-lg font-bold">
        <h1>Total Time = </h1>
        <div className="time flex items-center gap-2 text-green-600">
          <IoTimerOutline />
          <p>{totalTime} Minutes</p>
        </div>
      </div>

      <div className="px-4 flex gap-2 items-center text-lg font-bold">
        <h1>Total Calories = </h1>
        <div className="time flex items-center gap-2 text-red-400">
          <FaFireAlt />
          <p>{totalCalories} Calories</p>
        </div>
      </div>
    </div>
  );
};

WanttoCook.propTypes = {
  cooked: PropTypes.array.isRequired,
  setCooked: PropTypes.func.isRequired,
};

export default WanttoCook;
