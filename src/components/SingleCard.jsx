/* eslint-disable react/prop-types */

import { IoTimerOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";

const SingleCard = ({ cardData }) => {
  const {
    recipe_img,
    recipe_name,
    short_description,
    preparing_time,
    Calories,
  } = cardData;

  return (
    <div className=" border border-blue-300 p-3 rounded-md">
      <img
        className="w-full h-[200px] object-cover rounded-md mb-4"
        src={recipe_img}
        alt=""
      />
      <h1 className=" text-xl font-bold">{recipe_name}</h1>
      <p className=" text-gray-500">{short_description}</p>
      <hr className="my-4" />
      <h1>Ingredients : 08</h1>
      <ul>
        <li>chiekn</li>
        <li>chiekn</li>
        <li>chiekn</li>
        <li>chiekn</li>
      </ul>
      <hr className="my-4" />

      <div className=" flex gap-5">
        <div className="time flex items-center gap-2 ">
          <IoTimerOutline></IoTimerOutline>
          <p>{preparing_time} Minutes</p>
        </div>
        <div className="cal flex items-center gap-2">
          <FaFireAlt></FaFireAlt>
          <p>{Calories}</p>
        </div>
      </div>
      <button className="btn btn-success text-white rounded-full my-5 flex">
        Want to Cook
      </button>
    </div>
  );
};

export default SingleCard;
