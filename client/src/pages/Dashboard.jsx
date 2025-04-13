import React, { useState } from "react";
import DonationList from "../components/food/FoodList";
import { FaHeart, FaChartPie, FaMapMarkedAlt } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Food Donations</h2>
      <FoodList items={demoData} />
    </div>
  );
}