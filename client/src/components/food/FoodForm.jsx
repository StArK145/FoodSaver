import React, { useState } from 'react';
import { addFoodDonation } from '../../services/Api'; // Mock API service

const FoodForm = () => {
  const [form, setForm] = useState({
    foodType: '',
    quantity: '',
    expiryDate: '',
    contactInfo: '',
    location: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    
    // Mock the API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ foodType: '', quantity: '', expiryDate: '', contactInfo: '', location: '', notes: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl">
      <h2 className="text-xl font-medium text-green-700 mb-6 text-center">Help Fight Food Waste</h2>
      
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg animate-fade-in-down">
          <p className="font-medium">Thank you for your donation!</p>
          <p className="text-sm">Your contribution will help reduce food waste and support those in need.</p>
        </div>
      )}
      
      <form className="space-y-2" onSubmit={handleSubmit}>
        <FormField 
          icon={<Icons.Food />} 
          name="foodType" 
          placeholder="Food Type (e.g., Vegetables, Canned Goods)" 
          value={form.foodType} 
          onChange={handleChange} 
          required 
        />
        
        <FormField 
          icon={<Icons.Quantity />} 
          name="quantity" 
          placeholder="Quantity (e.g., 2kg, 5 boxes)" 
          value={form.quantity} 
          onChange={handleChange} 
          required 
        />
        
        <FormField 
          icon={<Icons.Calendar />} 
          name="expiryDate" 
          type="date" 
          placeholder="" 
          value={form.expiryDate} 
          onChange={handleChange} 
          required 
          helpText="Expiry date or best before date"
        />
        
        <FormField 
          icon={<Icons.Contact />} 
          name="contactInfo" 
          placeholder="Contact Information" 
          value={form.contactInfo} 
          onChange={handleChange} 
          required 
        />
        
        <FormField 
          icon={<Icons.Location />} 
          name="location" 
          placeholder="Pickup Location" 
          value={form.location} 
          onChange={handleChange} 
          required 
        />
        
        <TextAreaField 
          icon={<Icons.Notes />} 
          name="notes" 
          placeholder="Additional notes (pickup instructions, food details, etc.)" 
          value={form.notes} 
          onChange={handleChange} 
        />

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`
              ${loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} 
              text-white py-3 px-8 rounded-full transition duration-300 
              flex items-center font-medium shadow-md
            `}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>Donate Now 🎁</>
            )}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Thank you for helping reduce food waste and supporting our community!
        </p>
      </form>
    </div>
  );
};

export default FoodForm;