import axios from 'axios';

// Base API URL - adjust if your backend runs on a different port
const BASE_URL = 'http://localhost:5000/api';

// Create user profile (for registration)
export const createUserProfile = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register/users",  // This is correct if the server is running on port 5000
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response || error.message);
    throw new Error("Failed to create user profile");
  }

  return res.json();
};





export const fetchUserType = async (email) => {
  try {
      const response = await axios.get(`http://localhost:5000/api/users/type/${email}`);
      console.log(response.data.userType);
      
  } catch (error) {
      console.error("Error fetching user type:", error);
  }
};



// Add a new food donation
export const addFoodDonation = async (data) => {
  try {
    const response = await axios.post('http://localhost:5000/api/donations', data);
    return response.data;
  } catch (err) {
    console.error('Error while adding food donation:', err);
    throw err;
  }
};

// Get all food donations
export const getFoodDonations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/donations`);
    return response.data;
  } catch (error) {
    console.error("Fetch donations error:", error.response?.data || error.message);
    throw new Error("Failed to fetch donations");
  }
};

// Reserve a specific donation by ID
export const reserveFood = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/donations/${id}/reserve`);
    return response.data;
  } catch (error) {
    console.error("Reserve error:", error.response?.data || error.message);
    throw new Error("Failed to reserve donation");
  }
};
