import React, { useState } from "react";

const FoodCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Calculate days remaining until expiry
  const calculateDaysRemaining = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const daysRemaining = calculateDaysRemaining(item.expiryDate);
  
  // Determine badge color based on days remaining
  const getBadgeColor = (days) => {
    if (days <= 2) return "bg-red-100 text-red-800";
    if (days <= 5) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-2">
              {item.foodType === "Rice" && <span className="text-amber-600 mr-2">🍚</span>}
              {item.foodType === "Bread" && <span className="text-amber-600 mr-2">🍞</span>}
              {item.foodType === "Vegetables" && <span className="text-green-600 mr-2">🥗</span>}
              {item.foodType === "Fruits" && <span className="text-red-500 mr-2">🍎</span>}
              {item.foodType === "Dairy" && <span className="text-blue-500 mr-2">🥛</span>}
              {item.foodType === "Meat" && <span className="text-red-700 mr-2">🥩</span>}
              {!["Rice", "Bread", "Vegetables", "Fruits", "Dairy", "Meat"].includes(item.foodType) && 
                <span className="text-purple-600 mr-2">🍽️</span>}
              <h3 className="text-xl font-semibold text-gray-800">{item.foodType}</h3>
            </div>
            <p className="text-gray-600 mb-1"><span className="font-medium">Quantity:</span> {item.quantity} kg</p>
            <p className="flex items-center text-gray-600 mb-1">
              <span className="font-medium mr-1">Expires on:</span> 
              <span>{new Date(item.expiryDate).toLocaleDateString()}</span>
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getBadgeColor(daysRemaining)}`}>
                {daysRemaining} days left
              </span>
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            item.status === "available" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
          }`}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-1"><span className="font-medium">Contact:</span> {item.contactInfo}</p>
        {item.location && <p className="text-gray-600 mb-1"><span className="font-medium">Location:</span> {item.location}</p>}
        
        {item.additionalNote && (
          <div className="mt-2">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              {expanded ? "Hide notes" : "Show notes"}
              <svg 
                className={`w-4 h-4 ml-1 transform ${expanded ? "rotate-180" : ""} transition-transform duration-200`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expanded && (
              <p className="mt-2 text-gray-600 bg-gray-50 p-3 rounded-md text-sm">
                {item.additionalNote}
              </p>
            )}
          </div>
        )}
        
        {item.donatedBy && (
          <p className="mt-3 text-sm text-gray-500">
            <span className="font-medium">Donated by:</span> {item.donatedBy}
          </p>
        )}
      </div>
      
      <div className="bg-gray-50 px-5 py-3 flex justify-end">
        <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200">
          Request Item
        </button>
      </div>
    </div>
  );
};

export default function Dashboard() {
  // Enhanced demo data with all requested fields
  const demoData = [
    {
      foodType: "Rice",
      quantity: 10,
      expiryDate: "2025-04-20",
      contactInfo: "1234567890",
      location: "Downtown Food Bank",
      additionalNote: "Basmati rice, unopened packages. Suitable for families.",
      donatedBy: "Metro Supermarket",
      status: "available"
    },
    {
      foodType: "Bread",
      quantity: 5,
      expiryDate: "2025-04-14",
      contactInfo: "9876543210",
      location: "East Side Community Center",
      additionalNote: "Whole grain bread, packaged individually.",
      donatedBy: "Local Bakery",
      status: "available"
    },
    {
      foodType: "Vegetables",
      quantity: 8,
      expiryDate: "2025-04-16",
      contactInfo: "1122334455",
      location: "Riverside Shelter",
      additionalNote: "Mixed seasonal vegetables - carrots, potatoes, onions, tomatoes.",
      donatedBy: "Community Garden",
      status: "available"
    },
    {
      foodType: "Fruits",
      quantity: 6,
      expiryDate: "2025-04-15",
      contactInfo: "5566778899",
      location: "North District Food Hub",
      additionalNote: "Assorted apples and oranges in good condition.",
      donatedBy: "Green Farm Co-op",
      status: "available"
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Available Food Donations</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
            Filter
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700">
            + Add Donation
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoData.map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}