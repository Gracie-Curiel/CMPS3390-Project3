import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Navbar from "./Navbar.jsx";
import Budget from "./Budget.jsx";
import DashboardViewModel from "../viewmodels/DashboardViewModel";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const vm = new DashboardViewModel();

  if (vm.requiresAuth()) {
    navigate("/Signin");
    return null;
  }

  const [chartData, setChartData] = useState(vm.getChartData());
  const data = chartData;
  const Colors = ["#4CAF50", "#FF6B6B"];

  useEffect(() => {
    const refresh = () => {
      setChartData(vm.getChartData());
    };

    window.addEventListener("budget-updated", refresh);
    return () => window.removeEventListener("budget-updated", refresh);
  }, []);

  return (
    <div className="dashboard-page">

      <Navbar />

      {/* RESTORED DASHBOARD CARD */}
      <div className="dashboard-card">
        <h1 className="dash-title">Dashboard</h1>

        <div className="dashboard-content">

          {/* Ornament Chart */}
          {vm.user?.totalBudget > 0 && (
            <div className="ornament-container">
              <div className="ornament-top"></div>

              <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={100}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={Colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          )}

          {/* Budget panel */}
          <div className="stats-panel">
            <h2 className="over-budget">
              {vm.user.spentBudget > vm.user.totalBudget
                ? "You are over budget"
                : "You are within budget"}
            </h2>

            <p><strong>Total Budget:</strong> ${vm.user.totalBudget}</p>
            <p><strong>Total Spent:</strong> ${vm.user.spentBudget}</p>

            <Budget />
          </div>
        </div>
      </div>
    </div>
  );
}
