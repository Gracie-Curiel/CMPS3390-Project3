import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Navbar from "./Navbar.jsx";
let user = JSON.parse(localStorage.getItem('User'));
import DashboardViewModel from "../viewmodels/DashboardViewModel";

export default function Dashboard({ totalBudget, totalSpent }) {
  const navigate = useNavigate();
  const vm = new DashboardViewModel();
  
  if (vm.requiresAuth()) {
    navigate("/Signin");
    return null;
  }
  //passing parameters from giftlist
  const data = vm.getChartData();
  const Colors = ["#4CAF50", "#FF6B6B"];
  return (
    <div className="dashboard-container p-8">
      {/* NAV BAR */}
      <Navbar />

      {/* PIE CHART */}
      <div className="flex justify-center mt-12">
        <PieChart width={500} height={500}>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={200}>
            {data.map((entry, index) => (
              <Cell key={index} fill={Colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        {/*
              
      <div className="flex flex-col items-center mt-6">
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="input input-bordered w-48 mb-3"
          placeholder="Enter gift price"
        />
        <div className="flex gap-3">
          <button onClick={handleClick1} className="btn btn-success">
            Add
          </button>
          <button onClick={handleClick2} className="btn btn-error">
            Subtract
          </button>
        </div>
        */}
      </div>
    </div>
  );
}

