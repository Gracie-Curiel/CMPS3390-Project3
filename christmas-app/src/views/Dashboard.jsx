import "./Dashboard.css";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Dashboard({ totalBudget, totalSpent }) {
  //passing parameters from giftlist
  const data = [
    { name: "Total-Budget", value: totalBudget },
    { name: "Total-Spent", value: totalSpent },
  ];
  const Colors = ["#4CAF50", "#FF6B6B"];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/*NAV BAR*/}
      <div className="flex-1">
        <a className="text-2xl font-bold text-red-500">Christmas Gift Tacker</a>
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
      <PieChart width={500} height={500}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={200}>
          {data.map((entry, index) => (
            <Cell key={index} fill={Colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
    //entry -holds the slices information -value and name, then it loops through both entry index 0 for entry 1 and index 1 for entry 2
    //Tooltip uses nameKey"name" and data"value"  so it will display the names and the values  of the slices when the mouse hovers.
    // We will need a pie chart that has two values "totalBudget" and "totalSpent"
    // The default budget will be zero
    // The default total will also be zero(will increase when the user adds a gift)
  );
}
