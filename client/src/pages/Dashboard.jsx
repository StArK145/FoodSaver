import React, { useState } from "react";
import DonationList from "../components/food/FoodList";
import { FaHeart, FaChartPie, FaMapMarkedAlt } from 'react-icons/fa';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('available');
  
  const stats = [
    { id: 1, name: 'Total Donations', value: '832', icon: <FaHeart className="text-red-500" />, color: 'bg-red-50' },
    { id: 2, name: 'Meals Saved', value: '2,471', icon: <FaChartPie className="text-blue-500" />, color: 'bg-blue-50' },
    { id: 3, name: 'Active Locations', value: '18', icon: <FaMapMarkedAlt className="text-purple-500" />, color: 'bg-purple-50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4">
            Food Share Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting surplus food with those in need. Join our community to reduce food waste and fight hunger.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`${stat.color} rounded-xl p-6 shadow-sm flex items-center justify-between transition-all hover:shadow-md`}
            >
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('available')}
              className={`pb-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'available'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Available Donations
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`pb-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'map'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Donation Map
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`pb-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'history'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Your History
            </button>
          </nav>
        </div>
        
        {/* Main Content */}
        {activeTab === 'available' && (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Food Donations</h2>
            <DonationList />
          </>
        )}
        
        {activeTab === 'map' && (
          <div className="bg-white rounded-xl p-6 shadow-lg text-center py-24">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <FaMapMarkedAlt className="text-green-500 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Donation Map</h3>
            <p className="text-gray-600">
              The map view is coming soon! Visualize available donations in your area.
            </p>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div className="bg-white rounded-xl p-6 shadow-lg text-center py-24">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <FaChartPie className="text-green-500 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Donation History</h3>
            <p className="text-gray-600">
              Sign in to view your donation and reservation history.
            </p>
            <button className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}