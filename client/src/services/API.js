import axios from 'axios';


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
};

export const addFoodDonation = async (data) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const getFoodDonations = async () => {
  const res = await fetch(API);
  return res.json();
};

export const reserveFood = async (id) => {
  await fetch(`${API}/${id}/reserve`, { method: 'PUT' });
};