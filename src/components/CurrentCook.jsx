/* eslint-disable react/prop-types */
const CurrentCook = ({ preparing, index }) => {
  console.log(preparing);
  const { recipe_name, preparing_time, Calories } = preparing;

  return (
    <div>
      <div>
        <div className="overflow-x-auto p-2">
          <table className="table rounded-md p-4">
            {/* head */}

            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200 rounded-md">
                <th>{index}</th>
                <td className="w-[50%] p-0">{[recipe_name]}</td>
                <td className="pr-14">
                  {preparing_time}
                  <br /> Minutes
                </td>
                <td>
                  {Calories}
                  <br />
                  Calories
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrentCook;
