import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    orgName: "",
    phoneNo: "",
    userType: "donor"
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
      // For demo purposes
      alert("Registration successful!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full rounded-xl overflow-hidden flex shadow-4xl shadow-emerald-200/50">
        {/* Left side - Enhanced Green section with mission */}
        <div className="bg-gradient-to-br from-emerald-600 to-green-500 text-white p-10 w-1/2 flex flex-col relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          </div>
          
          <div className="relative mb-12">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 8c.8 0 1.5-.7 1.5-1.5S17.8 11 17 11h-2.8L13 7H8l-1.5 4H4c-.8 0-1.5.7-1.5 1.5S3.2 13 4 13h1l2 5h10l2-5h1z" />
              </svg>
              <h1 className="text-3xl font-bold ml-2">FoodSaver</h1>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="mb-8 text-lg text-green-50 leading-relaxed">
            Help reduce food waste and feed those in need by connecting surplus food with communities that need it most.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-green-50 font-medium">Connect with local organizations</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-green-50 font-medium">Track your contributions</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-green-50 font-medium">Make a real difference</span>
            </div>
          </div>
          
          <div className="mt-auto pt-8 text-green-100 text-sm">
            © 2025 FoodSaver. All rights reserved.
          </div>
        </div>

        {/* Right side - Enhanced Form */}
        <div className="p-10 w-1/2 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Create Your Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                  required
                  placeholder="johndoe"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                required
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                required
                minLength="6"
                placeholder="••••••"
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">Organization Name</label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                  required
                  placeholder="Company Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                  required
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-inner">
              <label className="block text-gray-700 text-sm font-semibold mb-3">Account Type</label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="donor"
                    checked={formData.userType === "donor"}
                    onChange={handleChange}
                    className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700 font-medium">Food Donor</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="receiver"
                    checked={formData.userType === "receiver"}
                    onChange={handleChange}
                    className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700 font-medium">Food Receiver</span>
                </label>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-medium py-4 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-xl transform hover:-translate-y-0.5"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>

            <div className="text-center text-sm text-gray-600 pt-4">
              Already have an account? 
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold ml-1 underline">Sign in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}