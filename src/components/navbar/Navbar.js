

import "./Navbar.css";
import { NavLink , Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home Page</Link>
      <Link to="/cart">Cart Page</Link>
    </div>
  );
};

export default Navbar;
