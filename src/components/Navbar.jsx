import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center my-5 text-center">
      <h1 className=" text-4xl text-center font-bold flex">
          <span className=" text-red-400">Dish</span>Delight
        </h1>
        <div className="menu-container flex items-center gap-10 text-lg  justify-center my-4 md:my-0">
          <a href="">Home</a>
          <a href="">Recipes</a>
          <a href="">About</a>
          <a href="">Search</a>
        </div>
        <div className="gap-5 justify-center hidden md:inline-flex">
          <div className=" flex items-center gap-4 bg-gray-200 p-[12px] rounded-full">
            <IoIosSearch className=" text-xl" />
            <input
              className=" bg-transparent border-none"
              type="text"
              placeholder="Search"
            />
          </div>
          <img
            className=" w-12"
            src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
