// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./views/Signin.jsx";
import Signup from "./views/Signup.jsx";
import Dashboard from "./views/Dashboard.jsx";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

