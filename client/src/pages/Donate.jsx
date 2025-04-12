import React from 'react';
import FoodForm from '../components/food/FoodForm';
import { Link, useLocation } from 'react-router-dom';


// Logo component
const FoodSaverLogo = () => (
  <div className="flex items-center">
    <span className="text-white text-2xl font-bold">
      <span className="text-green-300">Food</span>
      Saver
      <span className="ml-2 text-green-300">🍽️</span>
    </span>
  </div>
);

// Simple icon components for the sidebar
const Icons = {
  Home: () => <span className="mr-2">🏠</span>,
  Donate: () => <span className="mr-2">🎁</span>,
  Dashboard: () => <span className="mr-2">📊</span>,
  Quote: () => <span className="text-green-600 text-xl mr-2">💬</span>
};

// Sidebar navigation component
const Sidebar = () => {
  const location = useLocation(); // Get current path

  const navItems = [
    { name: 'Home', icon: <Icons.Home />, path: '/home' },
    { name: 'Donate', icon: <Icons.Donate />, path: '/donate' },
    { name: 'Dashboard', icon: <Icons.Dashboard />, path: '/dashboard' }
  ];

  return (
    <div className="bg-green-800 text-white w-64 min-h-screen p-4 flex flex-col">
      <div className="mb-10 pt-4">
        <FoodSaverLogo />
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg gap-2 ${
                    isActive
                      ? 'bg-green-700 text-white'
                      : 'text-green-100 hover:bg-green-700'
                  } transition-colors duration-200`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto pt-6">
        <div className="bg-green-700 p-4 rounded-lg">
          <h3 className="font-medium text-green-100 mb-2">Impact Stats</h3>
          <p className="text-sm text-green-100">You've helped save:</p>
          <div className="mt-2 text-sm">
            <div className="flex justify-between">
              <span>Total donations:</span>
              <span className="font-bold">124</span>
            </div>
            <div className="flex justify-between">
              <span>Food saved (kg):</span>
              <span className="font-bold">420</span>
            </div>
            <div className="flex justify-between">
              <span>People helped:</span>
              <span className="font-bold">1,560</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Quote component
const Quote = () => (
  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mb-6 shadow-sm">
    <div className="flex">
      <Icons.Quote />
      <div>
        <p className="text-green-800 italic">
          "When we share our food with others, we not only nourish their bodies but also their spirits. Every donation is a step toward a world without hunger."
        </p>
        <p className="text-green-600 text-sm mt-2 text-right">— FoodSaver Community</p>
      </div>
    </div>
  </div>
);

// Main Donate page component
const Donate = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentPage="donate"  />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-green-800 mb-6">Donate Food</h1>
        
        <Quote />
        
        <div className="bg-green-100 p-4 rounded-lg mb-8 shadow-sm">
          <p className="text-green-800 text-center">
            Your donation helps reduce food waste and supports those in need in our community.
          </p>
        </div>
        
        <FoodForm />
        <LoadScript googleMapsApiKey="AIzaSyDW9Wb_R2qnxSllRN92mG2e0saPq1q9tHY">
          <LocationPicker />
        </LoadScript>
      </div>
    </div>
  );
};

export default Donate;