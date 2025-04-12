import React, { useState,useEffect } from 'react';
import { addFoodDonation } from '../../services/API';




const FoodForm = () => {

  const [form, setForm] = useState({
    donatedBy:'Anyonymous',
    foodType: '',
    quantity: '',
    expiryDate: '',
    contactInfo: '',
    location: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await addFoodDonation(form);
      setSuccess(true);
      setForm({
        foodType: '',
        quantity: '',
        expiryDate: '',
        contactInfo: '',
        location: '',
        notes: ''
      });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Failed to submit donation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl max-w-lg mx-auto">
      <h2 className="text-xl font-medium text-green-700 mb-6 text-center">Help Fight Food Waste</h2>

      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg">
          <p className="font-medium">Thank you for your donation!</p>
          <p className="text-sm">Your contribution will help reduce food waste and support those in need.</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Food Type</label>
          <input
            type="text"
            name="foodType"
            value={form.foodType}
            onChange={handleChange}
            placeholder="e.g., Vegetables, Canned Goods"
            required
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="text"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g., 2kg, 5 boxes"
            required
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            value={form.expiryDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Info</label>
          <input
            type="text"
            name="contactInfo"
            value={form.contactInfo}
            onChange={handleChange}
            placeholder="Phone or Email"
            required
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g., 123 Street, City"
            required
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Pickup instructions or food condition"
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 resize-none"
            rows="4"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-full text-white font-medium transition duration-300 ${
              loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Processing...
              </div>
            ) : (
              'Donate Now 🎁'
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
