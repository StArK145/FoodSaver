import React from 'react';
import FoodForm from '../components/food/FoodForm';

const Donate = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-green-800 mb-4">Donate Food</h1>
      <FoodForm />
    </div>
  );
};

export default Donate;