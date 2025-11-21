import "./Dashboard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Dashboard() {
  // state variables
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [userInput, setUserInput] = useState(0);

  // handlers for updating totalSpent
  const handleClick1 = () => {
    setTotalSpent(totalSpent + Number(userInput));
  };

  const handleClick2 = () => {
    setTotalSpent(totalSpent - Number(userInput));
  };

  // chart data
  const data = [
    { name: "Total-Budget", value: totalBudget },
    { name: "Total-Spent", value: totalSpent },
  ];
  const Colors = ["#4CAF50", "#FF6B6B"];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* NAV BAR */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-red-500">Christmas Gift Tracker</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Gift List</a>
          </li>
          <li>
            <Link to="/Signin">Log Out</Link>
          </li>
        </ul>
      </div>

      {/* PIE CHART */}
      <PieChart width={500} height={500}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={200}>
          {data.map((entry, index) => (
            <Cell key={index} fill={Colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* USER INPUT */}
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
      </div>
    </div>
  );
}
