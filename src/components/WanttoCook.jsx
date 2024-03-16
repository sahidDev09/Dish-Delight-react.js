import SingleCookOne from "./SingleCookOne";

/* eslint-disable react/prop-types */
const WanttoCook = ({ cooked, handlePreparing}) => {
  return (
    <div className=" border border-gray-300 rounded-md min-h-full md:w-2/5">
      <h1 className=" text-2xl font-bold text-center mt-2">
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
            handlePreparing={handlePreparing}
            ></SingleCookOne>
        ))}
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center mt-2">
          Currently Cooking : 02
        </h1>
        <hr className=" my-5" />
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
      </div>
    </div>
  );
};

export default WanttoCook;
