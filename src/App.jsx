import "./App.css";
import FoodCards from "./components/FoodCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurRecipe from "./components/OurRecipe";
import WanttoCook from "./components/WanttoCook";

function App() {
  return (
    <div className=" container mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <OurRecipe></OurRecipe>
      <div className=" flex justify-between mt-10 gap-5">
        <FoodCards></FoodCards>
        <WanttoCook></WanttoCook>
      </div>
    </div>
  );
}

export default App;
