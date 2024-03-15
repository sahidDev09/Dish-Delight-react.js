import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const FoodCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="w-3/5 grid grid-cols-2 gap-5">
      {cards.map((card, index) => (
        <SingleCard key={index} cardData={card}></SingleCard>
      ))}
    </div>
  );
};

export default FoodCards;
