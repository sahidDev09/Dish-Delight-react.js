import { useState } from "react";
import "./App.css";
import FoodCards from "./components/FoodCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurRecipe from "./components/OurRecipe";
import WanttoCook from "./components/WanttoCook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// fuction for want to cook btn

function App() {
  const [cooked, setCooked] = useState([]);
  const [preparing, setPreparing] = useState([]);

  const handlePreparing = (prep,id) => {
    setPreparing([...preparing, prep]);

    console.log(id)

  };

  const handleCookbtn = (cook) => {
    const isExist = cooked.find((food) => food.id == cook.id);

    if (!isExist) {
      const newCooked = [...cooked, cook];
      setCooked(newCooked);
    } else {
      toast.warning("Already added");
    }
  };

  return (
    <div className=" container mx-auto">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurRecipe></OurRecipe>
      <div className=" md:flex justify-between mt-10 gap-5">
        <FoodCards handleCookbtn={handleCookbtn}></FoodCards>

        <WanttoCook
          cooked={cooked}
          setCooked ={setCooked}
          handlePreparing={handlePreparing}></WanttoCook>
      </div>
    </div>
  );
}

export default App;
