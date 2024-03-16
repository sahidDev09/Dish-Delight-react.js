import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import SingleCard from "./SingleCard";

const FoodCards = ({ handleCookbtn }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="md:w-3/5 md:grid grid-cols-2 gap-5 mb-9">
      {cards.map((card, index) => (
        <SingleCard key={index} cardData={card} handleCookbtn={handleCookbtn} />
      ))}
    </div>
  );
};

FoodCards.propTypes = {
  handleCookbtn: PropTypes.func.isRequired
};

export default FoodCards;
