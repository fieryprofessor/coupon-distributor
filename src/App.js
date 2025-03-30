import './App.css';
import AdminLogin from './components/AdminLogin';
import CouponClaim from './components/CouponClaim';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
   <>
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coupons" element={<CouponClaim />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
    </Router>
   </>
  );
}

export default App;
