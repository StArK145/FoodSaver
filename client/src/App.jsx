import {React, useContext } from "react";
import {useNavigate, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import LoginDashboard from "./pages/LoginDashboard";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./services/firebase";
import { signOut } from "firebase/auth";
import OurProcess from './pages/OurProcess';


function AppContent() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      navigate("/LoginDashboard"); // Redirect to login
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <nav className="bg-green-700 text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">FoodSaver</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/register">Register</Link>
          {!user ? (
            <Link to="/LoginDashboard">Login</Link>
          ) : (
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
              logout
            </button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/LoginDashboard" element={<LoginDashboard />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/donate"
          element={
            <ProtectedRoute>
              <Donate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <h1 className="text-center text-2xl p-10 text-red-600">
              404 - Page Not Found
            </h1>
          }
        />
        <Route path="/process" element={<OurProcess />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
