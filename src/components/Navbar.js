// Write your code here
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav-bar-container-light">
        <h4 className="logo">AFFILIFYX</h4>
        <ul className="middle-items">
          <li className="list-item">
            <Link to="/" className="link-light">
              Shop
            </Link>
          </li>
          <li className="list-item">
            <Link to="/about" className="link-light">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
