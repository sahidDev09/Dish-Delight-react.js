import { useState } from "react";
import "./App.css";
import FoodCards from "./components/FoodCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurRecipe from "./components/OurRecipe";
import WanttoCook from "./components/WanttoCook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const [cooked, setCooked] = useState([]);

  const handleCookbtn = (cook) => {
    const isExist = cooked.find((food) => food.id === cook.id);

    if (!isExist) {
      setCooked([...cooked, cook]);
    } else {
      toast.warning("Alredy added in cooking...");
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <ToastContainer />
        <Navbar />
        <Hero />
        <OurRecipe />
        <div className="md:flex justify-between mt-10 gap-5">
          <FoodCards handleCookbtn={handleCookbtn} />
          <WanttoCook cooked={cooked} setCooked={setCooked} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
