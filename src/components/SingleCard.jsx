/* eslint-disable react/prop-types */

import { IoTimerOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";

const SingleCard = ({ cardData, handleCookbtn }) => {
  const {
    recipe_img,
    ingredients,
    recipe_name,
    short_description,
    preparing_time,
    Calories,
  } = cardData;

  return (
    <div className=" border border-gray-300 p-5 rounded-md mb-5 md:mb-0 flex flex-col justify-between items-start">
      <div>
        <img
          className="w-full h-[200px] object-cover rounded-md mb-4"
          src={recipe_img}
          alt=""
        />
        <h1 className=" text-xl font-bold">{recipe_name}</h1>
        <p className=" text-gray-500">{short_description.slice(0, 40)}...</p>
        <hr className="my-4" />
        <h1 className=" font-semibold mb-2 ">
          Ingredients : {ingredients.length}
        </h1>
        <div>
          {ingredients.map((indgre, index) => (
            <ul key={index} className=" text-gray-500 list-disc ml-6">
              <li>{indgre}</li>
            </ul>
          ))}
        </div>

        <hr className="my-4" />

        <div className=" flex gap-5">
          <div className="time flex items-center gap-2 ">
            <IoTimerOutline></IoTimerOutline>
            <p>{preparing_time} Minutes</p>
          </div>
          <div className="cal flex items-center gap-2">
            <FaFireAlt></FaFireAlt>
            <p>{Calories} calories</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleCookbtn(cardData)}
        className="btn btn-success text-white rounded-full my-5 flex">
        Want to Cook
      </button>
    </div>
  );
};

export default SingleCard;
