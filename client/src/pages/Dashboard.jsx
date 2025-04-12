import React, { useEffect, useState } from 'react';
import { getFoodDonations, reserveFood } from '../services/foodAPI';
import FoodCard from '../components/food/FoodCard';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);

  const fetchData = async () => {
    const data = await getFoodDonations();
    setFoods(data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleReserve = async (id) => {
    await reserveFood(id);
    fetchData();
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {foods.map(food => (
        <FoodCard key={food._id} food={food} onReserve={handleReserve} />
      ))}
    </div>
  );
};

export default Dashboard;