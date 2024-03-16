import PropTypes from "prop-types";

const SingleCookOne = ({ cooked, index, handlePreparing }) => {
  const { id, recipe_name, preparing_time, Calories } = cooked;

  const preparingHandler = () => {
    handlePreparing(cooked, id);
  };

  return (
    <>
      <tr className="bg-base-200 rounded-md">
        <th>{index}</th>
        <td className="w-[50%] p-0">{recipe_name}</td>
        <td className="pr-14">
          {preparing_time}
          <br /> Minutes
        </td>
        <td>
          {Calories}
          <br />
          Calories
        </td>
        <td>
          <button
            onClick={preparingHandler}
            className="btn btn-success text-white rounded-full my-3">
            Preparing
          </button>
        </td>
      </tr>
      <hr className="border-2 border-gray-50" />
    </>
  );
};

SingleCookOne.propTypes = {
  cooked: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handlePreparing: PropTypes.func.isRequired,
};

export default SingleCookOne;
