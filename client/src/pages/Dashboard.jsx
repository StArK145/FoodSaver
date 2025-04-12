import FoodList from "../components/food/FoodList";
import React from "react";

const demoData = [
  { foodType: "Rice", quantity: 10, expiryDate: "2025-04-20", contactInfo: "1234567890", status: "available" },
  { foodType: "Bread", quantity: 5, expiryDate: "2025-04-14", contactInfo: "9876543210", status: "available" },
  { foodType: "Vegetables", quantity: 8, expiryDate: "2025-04-16", contactInfo: "1122334455", status: "available" }
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Food Donations</h2>
      <FoodList items={demoData} />
    </div>
  );
}
