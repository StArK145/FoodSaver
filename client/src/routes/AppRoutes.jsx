import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Donate from "../pages/Donate";
// import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/donate" element={<Donate />} />
    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
