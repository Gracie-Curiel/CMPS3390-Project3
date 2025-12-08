import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* NAV BAR */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-red-500">
          <Link to="/Dashboard">
          Christmas Gift Tracker
          </Link>
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Giftlist">Gift List</Link>
          </li>
          <li>
            <Link to="/Signin">Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
