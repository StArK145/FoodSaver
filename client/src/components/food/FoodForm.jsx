import React, { useState } from 'react';
import { addFoodDonation } from '../../services/API';

const FoodForm = () => {
  const [form, setForm] = useState({
    foodType: '', quantity: '', expiryDate: '', contactInfo: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const location = { lat: 19.076, lng: 72.877 }; // demo coords
    await addFoodDonation({ ...form, location });
    alert('Food Donated!');
  };

  return (
    <form className="space-y-4 bg-white p-6 shadow-md rounded-2xl max-w-lg mx-auto" onSubmit={handleSubmit}>
      <input name="foodType" placeholder="Food Type" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="quantity" type="number" placeholder="Quantity" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="expiryDate" type="date" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="contactInfo" placeholder="Contact Info" className="w-full p-2 border rounded" onChange={handleChange} />
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-800">Donate</button>
    </form>
  );
};

export default FoodForm;