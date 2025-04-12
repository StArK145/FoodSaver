import React, { useEffect, useState } from "react";
import { getFoods, reserveFood } from "../../services/foodAPI";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  const fetchData = async () => {
    const res = await getFoods();
    setFoods(res.data);
  };

  const handleReserve = async (id) => {
    await reserveFood(id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {foods.map((food) => (
        <FoodCard key={food._id} food={food} onReserve={handleReserve} />
      ))}
    </div>
  );
};

export default FoodList;