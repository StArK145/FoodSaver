import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="bg-green-700 text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">FoodSaver</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;