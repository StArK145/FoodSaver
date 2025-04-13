import React from "react";
import { 
  FaUserPlus, 
  FaPencilAlt, 
  FaDesktop, 
  FaHandshake, 
  FaChartLine, 
  FaAppleAlt,
  FaUtensils,
  FaLeaf,
  FaUsers,
  FaRegLightbulb
} from "react-icons/fa";
import { useEffect } from "react";



const OurProcess = () => {
  // Statistics data
  const impactStats = [
    { value: "2,500+", label: "Meals Saved", icon: <FaAppleAlt /> },
    { value: "800+", label: "Active Users", icon: <FaUsers /> },
    { value: "35+", label: "Neighborhoods", icon: <FaUtensils /> },
    { value: "1.2 tons", label: "CO₂ Prevented", icon: <FaLeaf /> },
  ];

  // FAQ data
  const faqItems = [
    {
      question: "What types of food can I donate?",
      answer: "You can donate any food that is still safe to consume. This includes fresh produce, prepared meals, packaged goods, and more. The food should not be expired and should be kept at proper temperatures during storage."
    },
    {
      question: "How do I know my donation will be used properly?",
      answer: "Our platform connects donors directly with recipients, and we have a rating system for users. After pickup, both parties can confirm the transaction went smoothly, ensuring accountability throughout the process."
    },
    {
      question: "Is there a cost to use FoodSaver?",
      answer: "No, FoodSaver is completely free to use for both donors and recipients. Our mission is to reduce food waste and support communities, so we don't charge any fees for our service."
    },
    {
      question: "How does pickup work?",
      answer: "Once someone reserves your donation, they'll coordinate with you using the contact information you provided. You can agree on a pickup time that works for both parties. The platform marks the donation as 'reserved' so others know it's no longer available."
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fighting Food Waste Together</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            FoodSaver connects surplus food with those who need it, creating a more sustainable and caring community.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-lg -mt-12 md:-mt-16 text-center mb-16">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            We believe that good food should never go to waste. FoodSaver is designed to make food donation simple, efficient, and accessible to everyone. By connecting donors with recipients, we're building a more sustainable future while strengthening community bonds.
          </p>
        </div>

        {/* Process Section */}
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">How FoodSaver Works</h2>
        
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaUserPlus className="text-xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">1. Register & Login</h3>
                <p className="text-gray-700">
                  Create your account in seconds using email or Google authentication. Your information is secure and helps us build a trusted community of food-sharers.
                </p>
                <div className="mt-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full mr-2">Simple</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Secure</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaPencilAlt className="text-xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">2. Create Food Listings</h3>
                <p className="text-gray-700">
                  Donors provide details about available food including type, quantity, expiration, and pickup location. Photos help recipients know exactly what's available.
                </p>
                <div className="mt-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full mr-2">Detailed</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Visual</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaDesktop className="text-xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">3. Browse Donations</h3>
                <p className="text-gray-700">
                  Recipients browse available donations on an interactive map or list view. Search filters help find nearby food matching specific dietary needs or preferences.
                </p>
                <div className="mt-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full mr-2">Interactive</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Searchable</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaHandshake className="text-xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">4. Reserve & Pickup</h3>
                <p className="text-gray-700">
                  Recipients reserve items they want and arrange pickup directly with donors. Once completed, both parties confirm the successful exchange.
                </p>
                <div className="mt-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full mr-2">Direct</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Verified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500 md:col-span-2">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaChartLine className="text-xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">5. Track Community Impact</h3>
                <p className="text-gray-700">
                  Every donation contributes to our community impact metrics. Users can see their personal contribution to reducing food waste and supporting their community. We track meals saved, CO₂ emissions prevented, and communities served.
                </p>
                <div className="mt-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full mr-2">Meaningful</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Transparent</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full ml-2">Impactful</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Our Impact So Far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <span className="text-green-600 text-xl">{stat.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-green-700">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center">
                  <FaRegLightbulb className="text-green-500 mr-2" />
                  {item.question}
                </h3>
                <p className="text-gray-700 pl-7">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 text-white p-8 rounded-xl shadow-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Join our community today and start sharing food, reducing waste, and helping others in your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-medium text-lg transition-colors">
              Donate Food
            </a>
            <a href="/register" className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors">
              Create Account
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-700 font-bold">JR</span>
              </div>
              <div>
                <h4 className="font-bold">Jamie Rodriguez</h4>
                <p className="text-sm text-gray-500">Restaurant Owner</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "FoodSaver has been a game-changer for our restaurant. Instead of throwing away unused ingredients at the end of the day, we can help local families. The process is so simple that we've made it part of our daily routine."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-700 font-bold">SP</span>
              </div>
              <div>
                <h4 className="font-bold">Sarah Patel</h4>
                <p className="text-sm text-gray-500">Community Organizer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "As someone who works with vulnerable communities, I've seen firsthand how FoodSaver bridges the gap between abundance and need. It's not just about food - it's about dignity, community connection, and sustainability all in one platform."
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-green-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Join the Food-Saving Movement</h2>
          <p className="text-gray-700 mb-6">Every meal saved makes a difference. Start your journey with FoodSaver today.</p>
          <a 
            href="/donate" 
            className="inline-block bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;