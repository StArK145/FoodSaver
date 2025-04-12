import axios from 'axios';

export const createUserProfile = async (userData) => {
  const res = await fetch("http://localhost:5000/api/auth/register/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("Failed to create user profile");
  }

  return res.json();
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