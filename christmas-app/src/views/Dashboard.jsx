import "./Dashboard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Dashboard() {
  // state variables
  const [totalBudget, setTotalBudget] = useState(1000); 
  const [totalSpent, setTotalSpent] = useState(0);
  const [userInput, setUserInput] = useState(0);

  // update handlers
  const handleAdd = () => {
    setTotalSpent(totalSpent + Number(userInput));
  };

  const handleSubtract = () => {
    setTotalSpent(totalSpent - Number(userInput));
  };

  // pie chart data
  const data = [
    { name: "Remaining", value: totalBudget - totalSpent },
    { name: "Spent", value: totalSpent },
  ];

  const Colors = ["#0d4d27", "#b32a1c"]; // green, red

  return (
    <div className="dashboard-page">

      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow-sm dashboard-nav">
        <div className="flex-1">
          <a className="text-2xl font-bold text-red-700">
            Christmas Gift Tracker
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Gift List</a></li>
            <li><Link to="/Signin">Log Out</Link></li>
          </ul>
        </div>
      </div>

      {/* MAIN DASHBOARD CARD */}
      <div className="dashboard-card">
        <h1 className="dash-title">Dashboard</h1>

        <div className="dashboard-content">
          {/* Ornament chart */}
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

          {/* SIDE TEXT */}
          <div className="stats-panel">
            <h2 className="over-budget">
              {totalSpent > totalBudget
                ? "You are over budget"
                : "You are within budget"}
            </h2>

            <p><strong>Total Budget:</strong> ${totalBudget}</p>
            <p><strong>Total Spent:</strong> ${totalSpent}</p>

            {/* User Input */}
            <div className="input-area">
              <input
                type="number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="input input-bordered mt-3 w-full"
                placeholder="Enter gift price"
              />

              <div className="button-row">
                <button onClick={handleAdd} className="btn btn-success">
                  Add
                </button>
                <button onClick={handleSubtract} className="btn btn-error">
                  Subtract
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
