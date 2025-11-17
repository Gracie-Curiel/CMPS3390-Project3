import './Dashboard.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/*NAV BAR*/}
      <div className="flex-1">
      <a className="text-2xl font-bold text-red-500">Christmas Gift Tacker</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Gift List</a></li>
          <li><Link to="/Signin">Log Out</Link>    
          </li>
        </ul>
      </div>
    </div>
    // We will need a pie chart that has two values "totalBudget" and "totalSpent"
    // The default budget will be zero
    // The default total will also be zero(will increase when the user adds a gift)
  );
}
