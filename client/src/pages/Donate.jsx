import React, { useState,useContext } from "react";
import FoodForm from "../components/food/FoodForm";
import { auth } from "../services/firebase";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// import { AuthProvider } from "../context/AuthContext";
import { fetchUserType } from "../services/API";

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

// Icons
const Icons = {
  Quote: () => <span className="text-green-600 text-xl mr-2">💬</span>,
};

// Sidebar without navItems
const Sidebar = () => {
  return (
    <div className="bg-green-800 text-white w-64 min-h-screen p-4 flex flex-col">
      <div className="mb-10 pt-4">
        <FoodSaverLogo />
      </div>

      {/* You can add custom sidebar content here if needed */}

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

// Quote
const Quote = () => (
  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mb-6 shadow-sm">
    <div className="flex">
      <Icons.Quote />
      <div>
        <p className="text-green-800 italic">
          "When we share our food with others, we not only nourish their bodies
          but also their spirits. Every donation is a step toward a world
          without hunger."
        </p>
        <p className="text-green-600 text-sm mt-2 text-right">
          — FoodSaver Community
        </p>
      </div>
    </div>
  </div>
);

// Location Picker
const LocationPicker = () => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 40.7128,
    lng: -74.006,
  });

  const handleMapClick = (event) => {
    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={markerPosition}
      zoom={12}
      onClick={handleMapClick}
    >
      <Marker position={markerPosition} />
    </GoogleMap>
  );
};

// Main Donate page
const Donate = () => {
  
  const [isdDonor,setDonor] = useState(null)
 
  const checkUser = async () => {
    const email =auth.currentUser.email;
    const userType = await fetchUserType(email);
    setDonor(userType)
    
  };
  checkUser()
  

  
  return (isdDonor==="donor"?
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-green-800 mb-6">
          Donate Food
        </h1>

        <Quote />

        <div className="bg-green-100 p-4 rounded-lg mb-8 shadow-sm">
          <p className="text-green-800 text-center">
            Your donation helps reduce food waste and supports those in need in
            our community.
          </p>
        </div>

        <FoodForm />

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Select Donation Location
          </h2>
          <LoadScript googleMapsApiKey="AIzaSyDW9Wb_R2qnxSllRN92mG2e0saPq1q9tHY">
            <LocationPicker />
          </LoadScript>
        </div>
      </div>
    </div>: <div className="text-red-600 text-center p-10 text-xl">
      You are not a donor. Access Denied.
    </div>
  );
};

export default Donate;
