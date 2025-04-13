import React, { useEffect, useState } from "react";
import { auth } from '../../services/firebase';
import {
  FaMapMarkerAlt,
  FaUser,
  FaUtensils,
  FaCalendarAlt,
  FaBoxOpen,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'available', 'reserved'

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/api/donations")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
        setIsLoading(false);
      });
  }, []);
  const [filterEmail, setFilterEmail] = useState(auth.currentUser.email); // State for email filter


  const filteredDonations = donations.filter((donation) => {
    const matchesSearch =
      donation.foodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.donatedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesEmail = filterEmail
      ? donation.donatedBy.toLowerCase().includes(filterEmail.toLowerCase())
      : true;

    if (filter === "all") return matchesSearch;
    if (filter === "available") return matchesSearch && !donation.isReserved;
    if (filter === "reserved") return matchesSearch && donation.isReserved;
    return matchesSearch;
    
  });

  // Calculate days until expiry
  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Determine expiry status color
  const getExpiryStatusColor = (days) => {
    if (days < 0) return "text-red-600";
    if (days <= 2) return "text-orange-600";
    return "text-green-600";
  };

  const handleReserve = async (donationId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/donations/${donationId}/reserve`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reservedBy:auth.currentUser.email , // Replace with actual logged-in user
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to reserve the donation");
      }

      const updatedDonation = await response.json();

      // Update state: replace the donation with the updated one
      setDonations((prevDonations) =>
        prevDonations.map((d) => (d._id === donationId ? updatedDonation : d))
      );
    } catch (error) {
      console.error("Error reserving donation:", error);
      alert("Failed to reserve this donation. Try again.");
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search donations..."
            className="pl-10 pr-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-500" />
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Donations</option>
            <option value="available">Available Only</option>
            <option value="reserved">Reserved Only</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="py-12">
          <div className="animate-pulse flex justify-center">
            <div className="w-12 h-12 rounded-full bg-green-200"></div>
          </div>
          <p className="text-center text-gray-500 mt-4">Loading donations...</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDonations.length === 0 ? (
            <div className="col-span-full py-12 text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <FaBoxOpen className="text-green-500 text-2xl" />
              </div>
              <p className="text-gray-500 text-lg">
                No food donations match your search.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilter("all");
                }}
                className="mt-4 text-green-600 hover:text-green-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredDonations.map((donation) => {
              const daysUntilExpiry = getDaysUntilExpiry(donation.expiryDate);
              const expiryColorClass = getExpiryStatusColor(daysUntilExpiry);

              return (
                <div
                  key={donation._id}
                  className={`bg-white rounded-xl border ${
                    donation.isReserved ? "border-gray-200" : "border-green-200"
                  } shadow hover:shadow-md transition-all p-5 flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Status badge */}
                  <div className="absolute top-0 right-0">
                    <span
                      className={`px-4 py-1 rounded-bl-lg text-sm font-medium ${
                        donation.isReserved
                          ? "bg-gray-100 text-gray-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {donation.isReserved ? "Reserved" : "Available"}
                    </span>
                  </div>

                  <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FaUtensils className="text-green-600" />{" "}
                      {donation.foodType}
                    </h3>

                    <div className="border-b border-gray-100 pb-2"></div>

                    <p className="text-gray-700 flex items-center gap-2">
                      <FaUser className="text-green-500 min-w-4" />
                      <span className="text-gray-500">Donated by:</span>
                      <span className="font-medium">{donation.donatedBy}</span>
                    </p>

                    <p className="text-gray-700 flex items-center gap-2">
                      <FaBoxOpen className="text-green-500 min-w-4" />
                      <span className="text-gray-500">Quantity:</span>
                      <span className="font-medium">{donation.quantity}</span>
                    </p>

                    <p className="text-gray-700 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-green-500 min-w-4" />
                      <span className="text-gray-500">Location:</span>
                      <span className="font-medium">{donation.location}</span>
                    </p>

                    <p className="text-gray-700 flex items-center gap-2">
                      <FaCalendarAlt
                        className={`${expiryColorClass} min-w-4`}
                      />
                      <span className="text-gray-500">Expiry:</span>
                      <span className={`font-medium ${expiryColorClass}`}>
                        {new Date(donation.expiryDate).toLocaleDateString()}
                        {daysUntilExpiry <= 2 &&
                          daysUntilExpiry >= 0 &&
                          " (Soon)"}
                        {daysUntilExpiry < 0 && " (Expired)"}
                        {daysUntilExpiry > 2 &&
                          ` (${daysUntilExpiry} days left)`}
                      </span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      className={`w-full py-2 rounded-lg font-medium transition-all ${
                        donation.isReserved
                          ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                      disabled={donation.isReserved}
                      onClick={() => handleReserve(donation._id)}
                    >
                      {donation.isReserved ? "Already Reserved" : "Reserve Now"}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default DonationList;
