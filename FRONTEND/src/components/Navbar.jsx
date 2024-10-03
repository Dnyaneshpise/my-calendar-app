import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-right">
      <Link to="/" className="navbar-title">CALENDAR APP</Link>
      </div>
      <div className="navbar-left">
        <button className="profile-button">User Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
