const API = 'http://localhost:5000/api/food';

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