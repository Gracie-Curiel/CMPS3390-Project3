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
    <div className="dashboard-container p-8">
      <Navbar />

      <div className="flex justify-center mt-12 gap-12">

        {vm.user?.totalBudget > 0 && (
          <PieChart width={500} height={500}>
            <Pie 
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={200}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={Colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}

        <Budget />
      </div>
    </div>
  );
}
