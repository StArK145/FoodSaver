import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OurProcess from './OurProcess';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white sticky top-0 z-50">
      {/* Navbar */}
      <nav className="bg-green-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
               
              </div>
            </div>
           
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="bg-green-800 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium">Partners</a>
            <a href="#" className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium">Volunteer</a>
            <a href="#" className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium">Donate</a>
            <a href="#" className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        {/* Decorative food icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute opacity-10" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 1.5})`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`
            }}>
              {i % 5 === 0 && (
                <div className="w-16 h-16 rounded-full border-4 border-green-300"></div>
              )}
              {i % 5 === 1 && (
                <div className="w-12 h-16 bg-orange-300 rounded-lg transform rotate-45"></div>
              )}
              {i % 5 === 2 && (
                <div className="w-12 h-12 bg-yellow-300 rounded-full"></div>
              )}
              {i % 5 === 3 && (
                <div className="w-16 h-12 bg-red-300 rounded-md transform -rotate-12"></div>
              )}
              {i % 5 === 4 && (
                <div className="w-10 h-14 bg-blue-300 rounded-lg"></div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <div className="text-base max-w-prose lg:max-w-none">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                  <span className="block text-green-600 mb-1">Rescuing Food.</span>
                  <span className="block">Nourishing Communities.</span>
                </h1>
                <p className="mt-6 text-xl text-gray-700 leading-8">
                  Every day, tons of perfectly good food goes to waste while families go hungry. 
                  We're bridging this gap by rescuing surplus food and delivering it to those in need.
                </p>
                
                <div className="mt-8 mb-8 relative">
                  <div className="overflow-hidden h-6 text-xs flex rounded-full bg-gray-200">
                    <div style={{width: "72%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500">
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        72% Complete
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm font-semibold text-gray-700">86,719 meals rescued</span>
                    <span className="text-sm font-semibold text-gray-500">Goal: 120,000 meals</span>
                  </div>
                </div>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link to="/donate" className="inline-block py-4 px-8 text-base font-semibold rounded-full text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform transition duration-200 hover:-translate-y-1">
                    Donate Now
                  </Link>
                  <a href="#volunteer" className="inline-block py-4 px-8 text-base font-semibold rounded-full text-green-700 bg-white border-2 border-green-500 hover:bg-green-50 transition duration-200 text-center">
                    Volunteer With Us
                  </a>
                </div>
                
                <p className="mt-6 text-gray-600 font-medium">
                  $30 = 18 nutritious meals for families in need
                </p>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
                <div className="aspect-w-5 aspect-h-4">
                  <img
                    src="/api/placeholder/800/640"
                    alt="Food donation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
                  <div className="text-sm font-semibold mb-1">SUCCESS STORY</div>
                  <div className="text-lg font-bold">How we rescued 5,000 meals in one weekend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              OUR IMPACT IN NUMBERS
            </h2>
            <div className="mt-4 h-1 w-24 bg-green-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Every pound of food rescued and every meal served brings us closer to ending hunger in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-md transform rotate-45"></div>
                </div>
              </div>
              <div className="text-4xl font-extrabold text-yellow-600 text-center mb-2">31,402</div>
              <div className="text-gray-700 text-center">Pounds Rescued Weekly</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="text-4xl font-extrabold text-green-600 text-center mb-2">2,084,000</div>
              <div className="text-gray-700 text-center">Meals Provided Yearly</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-400 rounded-md"></div>
                </div>
              </div>
              <div className="text-4xl font-extrabold text-blue-600 text-center mb-2">415,000</div>
              <div className="text-gray-700 text-center">People Served</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              <div className="text-4xl font-extrabold text-orange-600 text-center mb-2">95,000</div>
              <div className="text-gray-700 text-center">Volunteer Hours</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              HOW IT WORKS
            </h2>
            <div className="mt-4 h-1 w-24 bg-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-green-200 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              <div className="bg-white rounded-xl shadow-md p-8 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white border-4 border-green-100">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">We Collect</h3>
                <p className="text-gray-600">
                  We partner with grocery stores, restaurants, farms, and food distributors to collect nutritious surplus food that would otherwise go to waste.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white border-4 border-green-100">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">We Sort & Deliver</h3>
                <p className="text-gray-600">
                  Our dedicated volunteers sort, package, and deliver the rescued food to community centers, shelters, and families in need throughout the region.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white border-4 border-green-100">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">We Make an Impact</h3>
                <p className="text-gray-600">
                  By reducing food waste and fighting hunger simultaneously, we create a more sustainable and equitable food system for everyone in our community.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
  <Link to="/process">
    <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
      Learn More About Our Process
    </button>
  </Link>
</div>

        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>

      
    </div>

  );
};

export default Home;


