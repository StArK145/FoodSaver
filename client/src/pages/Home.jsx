import React from 'react';
import FoodMap from '../components/food/FoodMap';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome to FoodSaver</h1>
      <FoodMap />
    </div>
  );
};

export default Home;