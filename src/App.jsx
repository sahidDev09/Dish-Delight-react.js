import "./App.css";
import FoodCards from "./components/FoodCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurRecipe from "./components/OurRecipe";
import WanttoCook from "./components/WanttoCook";

function App() {
  const handleCookbtn = (click) => {
   console.log(click)
   alert('I am added sir')
  };

  return (
    <div className=" container mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <OurRecipe></OurRecipe>
      <div className=" md:flex justify-between mt-10 gap-5">
        <FoodCards handleCookbtn={handleCookbtn}></FoodCards>
        <WanttoCook></WanttoCook>
      </div>
    </div>
  );
}

export default App;
