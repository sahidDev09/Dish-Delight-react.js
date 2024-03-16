const CurrentCook = ({ preparing, index }) => {
  const { recipe_name, preparing_time, Calories } = preparing;

  return (
    <>
      <tr className="bg-base-200 rounded-md">
        <th>{index}</th>
        <td className="w-[40%]">{[recipe_name]}</td>
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
      <hr className=" border-2 border-gray-50" />
    </>
  );
};

export default CurrentCook;
