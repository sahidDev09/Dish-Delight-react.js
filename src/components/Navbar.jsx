import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center my-5 text-center">
        <h1 className=" text-3xl font-extrabold">
          <a href="">DishDelight</a>
        </h1>
        <div className="menu-container flex items-center gap-10 text-lg  justify-center my-4 md:my-0">
          <a href="">Home</a>
          <a href="">Recipes</a>
          <a href="">About</a>
          <a href="">Search</a>
        </div>
        <div className=" flex gap-5 justify-center">
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
