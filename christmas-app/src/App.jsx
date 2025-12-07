// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./views/Signin.jsx";
import Signup from "./views/Signup.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Recipient from "./views/Recipient.jsx";
import Giftlist from "./views/Giftlist.jsx";
import Navbar from "./views/Navbar.jsx";
import Budget from "./views/Budget.jsx";
import Countdown from "./views/Countdown.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Recipient" element={<Recipient />} />
        <Route path="/Giftlist" element={<Giftlist />} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/Budget" element={<Budget/>} />
        <Route path="/Countdown" element={<Countdown />} />
      </Routes>
    </Router>
  );
}
