export default function FoodCard({ item }) {
  return (
    <div className="bg-white rounded shadow p-4 border">
      <h3 className="text-xl font-semibold">🍱 {item.foodType}</h3>
      <p>Quantity: {item.quantity} kg</p>
      <p>Expires on: {new Date(item.expiryDate).toLocaleDateString()}</p>
      <p>Contact: {item.contactInfo}</p>
      <p>Status: <span className="font-medium text-green-700">{item.status}</span></p>
    </div>
  );
}