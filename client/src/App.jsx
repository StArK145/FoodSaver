import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Route pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional: 404 fallback */}
         <Route path="*" element={<h1 className="text-center text-2xl p-10 text-red-600">404 - Page Not Found</h1>} /> 
      </Routes>
    </Router>
  );
}

export default App;
