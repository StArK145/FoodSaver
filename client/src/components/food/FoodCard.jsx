import React from 'react';

const FoodCard = ({ food, onReserve }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 m-4 w-full md:w-72">
      <h2 className="text-xl font-bold text-green-700">{food.foodType}</h2>
      <p className="text-sm">Quantity: {food.quantity}</p>
      <p className="text-sm">Expires on: {new Date(food.expiryDate).toLocaleDateString()}</p>
      <p className="text-sm">Contact: {food.contactInfo}</p>
      <button
        className="mt-3 bg-green-600 text-white px-4 py-1 rounded-full hover:bg-green-800"
        onClick={() => onReserve(food._id)}
      >
        Reserve
      </button>
    </div>
  );
};

export default FoodCard;