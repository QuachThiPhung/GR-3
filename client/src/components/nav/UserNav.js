import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav style={{backgroundColor: "#232f3e", height: "100%", paddingTop: 15}}>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/user/history" className="nav-link" style={{color: "#FFFFFF"}}>
          History
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link" style={{color: "#FFFFFF"}}>
          Password
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/wishlist" className="nav-link" style={{color: "#FFFFFF"}}>
          Wishlist
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/information" className="nav-link" style={{color: "#FFFFFF"}}>
          Edit User Information
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
